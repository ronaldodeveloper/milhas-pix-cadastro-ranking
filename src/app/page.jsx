"use client"

import styles from "./home.module.scss";
import { useState, useEffect } from "react";
import { useRouter } from 'next/navigation';
import {  ProgressFlowData } from "../data/ProgressFlowData";
import { WindowSize }  from './../hook/WindowSize.js';
import { formatDateBR, formatMilhas, StateProgram, FormatStringLogo , FormatMoney } from "../util";
import Header from "./../components/Header";
import Button from './../components/Button';
import ProgressFlow from './../components/ProgressFlow';
import RadioButton from "./../components/RadioButton";
import Input from './../components/Input';
import Switch from './../components/Switch';
import Select from "./../components/Select";
import Badges from "./../components/Badges";

export default function Home() {

  const router = useRouter();
  const [step, setStep] = useState(1);
  const windowsize = WindowSize();

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [buttonRadioOption, setbuttonRadioOption] = useState(null);
  const [averageMiles, setAverageMiles] = useState(false);
  const [isPlus, setIsPlus] = useState(true);
  const smallMobile = windowsize.width < 768;
  const mobile = windowsize.width < 992;

  
  const [mileValue, setMileValue] = useState('16.50');
  const [isValueOfMiles, setIsValueOfMiles] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`/api/nova-oferta?mile_value=${mileValue}`, { cache: "no-store" })
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`)
        }
        const result = await res.json()
        setData(result.data)
      } catch (err) {
        console.error('Fetch error:', err)
        setError('Failed to load ranking simulation')
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  const HandleClickNext = () => {
    if (step === ProgressFlowData.length) return
    setStep(step + 1);
    setIsPlus(true)
  };
  const HandleClickBack = () => {
    if (step === 1) return
    setStep(step - 1);
    setIsPlus(true)
  };
  
  const [formData, setFormData] = useState({});

  const HandleObterDadosDoCadastro = (e, stepData) => {
    const { name, value, checked } = e.target;
    const oneString = 1;

    setFormData((prevData) => ({
     ...prevData,
     [name]: checked,
     [name]: value
    }));

    if (name === 'valor_a_cada_1000_milhas') {
        setMileValue(value);
        setIsValueOfMiles(value > oneString ? true : false);
    }
  };
 
  
  const HandleSubmit = (e) => {
    e.preventDefault();
    console.log(formData)
  };
  const HandleButtonRadioOption = (event) => {
    setbuttonRadioOption(event.target.value);
  };

  //  console.log(buttonRadioOption);

  const HandleAverageMiles = (event) => {
    setAverageMiles(event.target.checked);
  };
  const HandleClickRedirect = () => {
    router.push('/minhas-ofertas'); 
  };
  const RenderCurrentStep = (currentStep) => {
    switch (currentStep) {
      case 1:
        return RenderStep1();
      case 2:
        return RenderStep2();
      case 3:
        return RenderStep3();
      case 4:
        return RenderStep4();
      default:
        return null;
    }
  };

  const RenderStep1 = () => {
    // const stepKey = `step${step}`;
    const conteudoAtual = ProgressFlowData[step - 1].step_content;  
    return (
      <>
        <div className={styles.form_header}>
          <h2 className={styles.form_title}><span className="c-azul">{`0${step}. `}</span>{`${conteudoAtual.title}`}</h2>
        </div>
        <div className="p-4">
          <fieldset className={`${styles.fieldset_radio} mb-6`}>
            {
              conteudoAtual.checked_title && <h3 className={styles.fieldset_radio_title}>{conteudoAtual.checked_title}</h3>
            }
            <div className={`${styles.fieldset_radio_group}`}>
              {
                conteudoAtual.checked_items.map((item, index) => {
                  // console.log(index)
                  return (
                    <RadioButton
                      key={index}
                      id={item.value}
                      value={item.value}
                      name={item.name}
                      // defaultChecked={item.value === 1}
                      // isChecked={buttonRadioOption === item.value}
                      image={item.imageUrl}
                      alt={item.value}
                      // checked={item.checked}
                      onChange={HandleObterDadosDoCadastro}
                    />
                  )
                })
              }
            </div>
          </fieldset>
          <fieldset className={styles.fieldset_box}>
            {
              conteudoAtual.fields.length > 0 && conteudoAtual.fields.map((item, index) => { 
                return (
                  item.type === "select" ?
                    (
                      <Select
                        key={index}
                        id={`${item.label}`}
                        label={item.label}
                        option={item.options}
                        name={item.name}
                        onChange={(e) => HandleObterDadosDoCadastro(e)}
                      />
                    )
                    :
                    (<Input
                      key={index}
                      // id={`${stepKey}_input${index + 1}`}
                      id={item.id}
                      label={item.label}
                      type={item.type}
                      // name={`input${index + 1}`}
                      name={item.name}
                      // value={formData[stepKey][`.input${index + 1}`]}
                      value={item.value}
                      required={item.required}
                      readonly={item.readonly}
                      disabled={item.disabled}
                      iconeName={item.iconName}
                      placeholder={item.placeholder}
                      onChange={(e) => HandleObterDadosDoCadastro(e)}
                    />
                    )
                )
              })
            }
          </fieldset>
        </div>
      </>
    );
  };

  const RenderStep2 = () => {
    const stepKey = `step${step}`;
    const conteudoAtual = ProgressFlowData[step - 1].step_content;

     function formatarTextoComPrecos(texto) {
        return texto.replace(/(R\$\s*[\d.,]+)/g, '<strong>$1</strong>');
     }
  
    return (
      <>
        <div className={styles.form_header}>
          <h2 className={styles.form_title}><span className="c-azul">{`0${step}. `}</span>{`${conteudoAtual.title}`}</h2>
          {
            conteudoAtual.description && windowsize.width >= 768 && isValueOfMiles && (
              <span className={styles.form_description} 
                    dangerouslySetInnerHTML={{ __html: formatarTextoComPrecos(conteudoAtual.description)}}>
              </span>
            ) 
          }
        </div>
        <div className="p-4">
          <fieldset className={`${styles.fieldset_radio} mb-6`}>
            {
              conteudoAtual.checked_title && <h3 className={styles.fieldset_radio_title}>{conteudoAtual.checked_title}</h3>
            }
            <div className={`${styles.fieldset_radio_group}`}>
              {
                conteudoAtual.checked_items.map((item, index) => {
                  return (
                    <RadioButton
                      key={index}
                      id={item.value}
                      value={item.value}
                      name={item.name}
                      label={item.value.replace("-", " ")} 
                      onChange={HandleObterDadosDoCadastro}
                    />
                  )
                })
              }
            </div>
          </fieldset>
          <fieldset className={`${styles.fieldset_box} mb-3 md:mb-6`}>            
            {
              conteudoAtual.fields.length > 0 && conteudoAtual.fields.map((item, index) => {
                return (
                   <Input
                      key={index}
                      id={`${item.id}`}
                      label={item.label}
                      type={item.type}
                      name={item.name}
                      value={item.value}
                      required={item.required}
                      readonly={item.readonly}
                      disabled={item.disabled}
                      iconeName={item.iconName}
                      iconeMoney={item.iconMoney}
                      placeholder={item.placeholder}
                      variante={item.variante}
                      isAlert={isValueOfMiles}
                      onChange={(e) => HandleObterDadosDoCadastro(e, stepKey)}
                    />
                )
              })
            }
            {
              conteudoAtual.description && smallMobile && isValueOfMiles && (
                <span className={styles.form_description}
                  dangerouslySetInnerHTML={{ __html: formatarTextoComPrecos(conteudoAtual.description) }}>
                </span>
              )
            }
          </fieldset>
          {
            windowsize.width < 992 && (
              <fieldset className="mb-6 flex flex-wrap gap-1">
                {
                  data && data.map((item, index) => (
                    <Badges key={index} variante={`${index === 4 ? "outline-verde" : "outline-azul"}`} isOutline={true}>{`${item.position} `} {`${FormatMoney(item.mile_value)}`}</Badges>
                  ))
                }
              </fieldset>
            )
          }
          <fieldset>
            <Switch message={"Definir média de milhas por passageiro"} onChange={(e) => HandleAverageMiles(e)}/>
            {
              averageMiles && (
                <div className="mt-3">
                  <Input type="number" name="definir_media_milhas_passageiro" onChange={HandleObterDadosDoCadastro}/>
                  <p className="mt-3 mb-0 text-[14px] c-verde">Melhor média para a sua oferta: <strong>27.800</strong></p>
                </div>
              )
            }
          </fieldset>
        </div>
      </>
    );
  };

  const RenderStep3 = () => {
    const stepKey = `step${step}`;
    const conteudoAtual = ProgressFlowData[step - 1].step_content;
    
    return (
      <>
        <div className={styles.form_header}>
          <h2 className={styles.form_title}><span className="c-azul">{`0${step}. `}</span>{`${conteudoAtual.title}`}</h2>
        </div>
        <div className="p-4">
          <fieldset className={styles.fieldset_box}>
            {
              conteudoAtual.fields.length > 0 && conteudoAtual.fields.map((item, index) => {
                return (
                  <Input
                    key={index}
                    // id={`${stepKey}_input${index + 1}`}
                    id={item.id}
                    label={item.label}
                    type={item.type}
                    // name={`input${index + 1}`}
                    name={item.name}
                    // value={formData[stepKey][`.input${index + 1}`]}
                    required={item.required}
                    readonly={item.readonly}
                    disabled={item.disabled}
                    iconeName={item.iconName}
                    iconeImage={item.iconImage}
                    iconeMoney={item.iconMoney}
                    iconeCode={item.iconCode}
                    placeholder={item.placeholder}
                    variante={item.variante}
                    onChange={(e) => HandleObterDadosDoCadastro(e, stepKey)}
                  />
                )
              })
            }
          </fieldset>
        </div>
      </>
    );
  };
  
  const RenderStep4 = () => {
    const conteudoAtual = ProgressFlowData[step - 1].step_content;

    return (
      <div className={styles.box_sucesso}>
          <img src={conteudoAtual.image_sucesso} alt="Ordem de venda criada com sucesso!"/>
          <h2 className={styles.box_sucesso_title}>{conteudoAtual.title}</h2>
          <p className={styles.box_sucesso_description}>{conteudoAtual.description}</p>

        <div className="hidden lg:flex">
          <Button
            iconeName="icone-arrow-right"
            iconeDirection="right" onClick={HandleClickRedirect}>
            {ProgressFlowData[step - 1].button[0].label}
          </Button>
        </div>
      </div>
    );
  };

  const HandleClickPlus = () => {
      setIsPlus(!isPlus)
  };


  return (
    <>
      <Header />
      <main className="container mb-[120px] mg:mb[0px]">
        <div className={styles.content}>
          <div className={styles.content_left}>
            {
              windowsize.width >= 992 && <ProgressFlow step={step} />
            }
          </div>

          <div className={styles.content_center}>
            <form onSubmit={HandleSubmit} className={styles.form}>
              {RenderCurrentStep(step)}
            </form>
            <div className={`${styles.flowControls} ${step === 1 && styles.flowControls_right} ${step === 4 && windowsize.width >= 992 && styles.flowControls_hidden} ${windowsize.width >= 992 && styles.desktop}`}>
              {
                step > 1 && (
                  <Button iconeName={ step === 4 && windowsize.width <= 992 ? "" : "icone-arrow-left"} iconeDirection="left" variante={"outline-white"} onClick={HandleClickBack}>
                    {
                      windowsize.width >= 992 ? "Voltar" : step === 4 ? "Sair" : ""
                    }
                  </Button>
                )
              }
              <div className={`${styles.flowControls_info}`}>
                {
                  step === 3 && (
                    <p className={styles.flowControls_info_termos}>
                      Ao prosseguir você concorda com os <a href="https://milhaspix.com/termos-e-uso" className="underline">termos de uso</a>
                    </p>
                  )
                }
                  {
                  step < 4 && (
                    <p className={styles.flowControls_info_text}>
                      <span className="c-azul">{step}</span>
                      {" de "}
                      <span>{ProgressFlowData.length}</span>
                    </p>
                  )
                }
                <Button iconeName="icone-arrow-right" iconeDirection="right" onClick={HandleClickNext}>
                  {
                    `${ProgressFlowData[step - 1].button[0].label}`
                  }
                </Button>
              </div>
            </div>
          </div>
          {
            step <= 3 && (
              <div className={styles.content_right}>
                {
                  ProgressFlowData && ProgressFlowData.map((item) => {
                    if (item.id === step) {
                      return (
                        <div key={item.id} className={`${styles.content_right_box_info} ${isPlus && styles.active}`}>
                          <h3 className={styles.content_right_box_info_title}>
                            {
                              `${item.step_content.info ? item.step_content.info.title : ""}`
                            }

                            {
                              windowsize.width < 992 && (
                                <button type="button" className={"button-plus"} onClick={HandleClickPlus}>
                                  {
                                    isPlus ? <span className="icones icone-plus"></span> : <img src="/image/img-minus.svg" alt="" className="imagem-minus" />
                                  }
                                </button>
                              )
                            }
                          </h3>
                          <p className={`${styles.content_right_box_info_description}`}>
                            {
                              item.step_content.info ? `${item.step_content.info.description}` : ""
                            }
                          </p>
                        </div>
                      )
                    }
                  })
                }
                {
                  step === 2 && windowsize.width >= 992 && (
                      <div className={styles.ranking_box}>
                          <h2 className={styles.ranking_title}>Ranking das ofertas</h2>
                          <ul className={styles.ranking_list}>
                            {
                               data && data.map((item, index) => {
                                return (
                                  <li key={index} className={`${styles.ranking_list_item} ${index === 4 && styles.currentPosition}`}>
                                    <span>
                                      <span className={styles.position}>{`${ item.position }° `}</span>
                                      <span className={styles.value}>{`${ FormatMoney(item.mile_value)}`}</span>
                                    </span>
                                    {
                                       index === 4 && <span className={styles.your}>Você</span> 
                                    }
                                  </li>
                                )
                              })
                            }
                          </ul>
                      </div>
                  ) 
                }
                {
                   step === 2 && (
                    <div className={styles.receba_box}>
                      <h2 className={styles.receba_title}>Receba até:</h2>
                      <h3 className={styles.receba_value}>
                        <span>{windowsize.width < 992 ? "Receba até:" : "R$ "}</span>
                        <span>{ windowsize.width >= 992 ? `${'24.325,23'}` : `R$ ${'24.325,23'}`}</span>
                      </h3>
                    </div>
                   )
                }
              </div>
            )
          }
        </div>
      </main>
    </>
  )
}
