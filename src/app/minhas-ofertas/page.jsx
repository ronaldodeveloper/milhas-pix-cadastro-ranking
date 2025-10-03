"use client";

import { useState, useEffect } from "react";
import { useRouter } from 'next/navigation';
import styles from "./MinhasOfertas.module.scss";
import Header from './../../components/Header';
import Button from './../../components/Button';
import Badges from './../../components/Badges';
import Select from './../../components/Select';
import Input from './../../components/Input';
import { WindowSize } from "./../../hook/WindowSize";
import CardOfertas from './../../components/CardOfertas';
import { formatDateBR, formatMilhas, StateProgram, FormatStringLogo } from "../../util";

function MinhasOfertas() {
    
    const router = useRouter(); 
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [busca, setBusca] = useState('');
    const [ofertasEncontradas, setofertasEncontradas] = useState(null);
    const windowsize = WindowSize();
    const url = '/api/minhas-ofertas';
    
      useEffect(() => {
        const fetchData = async () => {
          try {
            const res = await fetch(`${url}`, { cache: "no-store" })
            if (!res.ok) {
              throw new Error(`HTTP error! status: ${res.status}`)
            }
            const result = await res.json()
            setData(result.data.offers)
          } catch (err) {
            console.error('Fetch error:', err)
            setError('Failed to load ranking simulation')
          } finally {
            setLoading(false)
          }
        }
        fetchData()
    
      }, [])

      
    const HandleBuscarOfertas = (e) => {
        const input = e.target.value
        setBusca(input)
        const result = data.filter((item) => item.loyaltyProgram.toLowerCase().includes(input.toLowerCase()))
        setofertasEncontradas(result)
    }

    const HandleNovaOferta = () => {
        router.push('/')
    }

    // function formatDateBR(dateString) {
    //     const date = new Date(dateString);
    //     const formatter = new Intl.DateTimeFormat('pt-BR', {
    //         day: '2-digit',
    //         month: 'short',
    //         year: 'numeric'
    //     });

    //     const parts = formatter.formatToParts(date);
    //     const day = parts.find(p => p.type === 'day').value;
    //     const month = parts.find(p => p.type === 'month').value
    //         .replace('.', '')
    //         .replace(/^\w/, c => c.toUpperCase());
    //     const year = parts.find(p => p.type === 'year').value;

    //     return `${day} ${month} ${year}`;
    // }

    // function formatMilhas(number) {
    //     const cleanNumber = String(number).replace(/\D/g, '');
    //     return cleanNumber.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    // }

    // function StateProgram(status){
    //     switch (status) {
    //         case "Ativa": 
    //             return "verde"
    //         case "Inativo": 
    //             return "vermelho"
    //         case "Em Utilizacao": 
    //             return "azul"
    //         default:
    //             break;
    //     }
    // }

    // function FormatStringLogo(str){
    //     return str.replace(" ", "-").toLowerCase();
    // }  

    function RenderTodasOfertas(){
        return (
            <>
                {
                    data && data.map((item, index) => (
                        <div key={index} className="table-row">
                            <div className="table-cell">
                                <div className={`programa_container`}>
                                    <div className={`logo_container`}>
                                        <img src={`/image/logo-minhas-ofertas-${FormatStringLogo(item.loyaltyProgram)}.jpg`} alt={`Logo ${item.loyaltyProgram}`} className='logo' />
                                    </div>
                                    <div className={`programa`}>
                                        <h2 className={`programa_titulo ${item.loyaltyProgram == "Smiles" ? "c-laranja" : "c-azul-claro"}`}>{`${item.loyaltyProgram}`.replace(/([a-z])([A-Z])/g, '$1 $2')}</h2>
                                        <p className={`programa_tipo`}>{item.offerType}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="table-cell">
                                <Badges variante={StateProgram(item.offerStatus)}>
                                    {item.offerStatus}
                                </Badges>
                            </div>
                            <div className="table-cell">{item.offerId}</div>
                            <div className="table-cell">{item.accountLogin}</div>
                            <div className="table-cell">{formatMilhas(item.availableQuantity)}</div>
                            <div className="table-cell">{formatDateBR(item.createdAt)}</div>
                        </div>
                    )
                    )
                }
            </>
        )
    }
    
    function ResultadoBuscarPorOfertas() {
        return (
            <>
                {
                    ofertasEncontradas && ofertasEncontradas.map((item, index) => (
                        <div key={index} className="table-row">
                            <div className="table-cell">
                                <div className={`programa_container`}>
                                    <div className={`logo_container`}>
                                        <img src={`/image/logo-minhas-ofertas-${FormatStringLogo(item.loyaltyProgram)}.jpg`} alt={`Logo ${item.loyaltyProgram}`} className='logo' />
                                    </div>
                                    <div className={`programa`}>
                                        <h2 className={`programa_titulo ${item.loyaltyProgram == "Smiles" ? "c-laranja" : "c-azul-claro"}`}>{`${item.loyaltyProgram}`.replace(/([a-z])([A-Z])/g, '$1 $2')}</h2>
                                        <p className={`programa_tipo`}>{item.offerType}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="table-cell">
                                <Badges variante={StateProgram(item.offerStatus)}>
                                    {item.offerStatus}
                                </Badges>
                            </div>
                            <div className="table-cell">{item.offerId}</div>
                            <div className="table-cell">{item.accountLogin}</div>
                            <div className="table-cell">{formatMilhas(item.availableQuantity)}</div>
                            <div className="table-cell">{formatDateBR(item.createdAt)}</div>
                        </div>
                    )
                    )
                }
            </>
        )
    }

    function ResultadoBuscarPorOfertasMobile() {
        return (
            <>
                {
                    ofertasEncontradas && ofertasEncontradas.map((item, index) => (
                        <CardOfertas
                            key={index}
                            title={item.loyaltyProgram}
                            status={StateProgram(item.offerStatus)}
                            data={formatDateBR(item.createdAt)}
                            id={item.offerId}
                            login={item.accountLogin}
                            ofertas={item.availableQuantity}
                            tipo={item.offerType}
                        />
                    )
                    )
                }
            </>
        )
    }


    function RenderTodasOfertasMobile () {
        return (
            <>
                {
                    data && data.map((item, index) => (
                        <CardOfertas
                            key={index}
                            title={item.loyaltyProgram}
                            status={item.offerStatus}
                            data={formatDateBR(item.createdAt)}
                            id={item.offerId}
                            login={item.accountLogin}
                            ofertas={item.availableQuantity}
                            tipo={item.offerType}
                        />
                    )
                    )
                }
            </>
        )
    }


    return (
        <>
           <Header />
           <main className={`${styles.minhas_ofertas}`}>
                <div className={`${styles.minhas_ofertas_topo}`}>
                    <div className="container flex items-center justify-between">
                        <h1 className={styles.minhas_ofertas_title}>Minhas Ofertas</h1>
                        <Button iconeName={"icone-plus"} iconeDirection="left" onClick={HandleNovaOferta}>Nova oferta</Button>
                    </div>
                </div>
                <div className="container">
                   <div className={styles.filter_container}>
                     <h2 className={styles.filter_title}>Todas ofertas</h2>

                        <div className={styles.filter_box}>
                            <div className={styles.busca}>
                                <Input 
                                    placeholder="Login de acesso, ID da oferta..." 
                                    type="search" 
                                    iconeName="icone-search" 
                                    iconeDirection="right" 
                                    value={busca} 
                                    name={busca}
                                    onChange={HandleBuscarOfertas} 
                                    />
                            </div>
                            <div className={styles.filtros}>
                                <Select option={["Filtros"]}/>
                            </div>
                        </div>
                   </div>
                    {
                        windowsize.width >= 992 ? (
                            <div className={"overflow-x-auto table-container"}>
                     <div className="table w-full tatle-offers">
                        <div className="table-header-group">
                            <div className="table-row">
                                <div className="table-cell">Programa</div>
                                <div className="table-cell">Status</div>
                                <div className="table-cell">ID da oferta</div>
                                <div className="table-cell">Login</div>
                                <div className="table-cell">Milhas ofertadas</div>
                                <div className="table-cell">Data</div>
                            </div>
                        </div>
                            <div className="table-row-group">
                                {
                                    loading ? (
                                        <div className="table-row">
                                            <span className="table-cell" colSpan="6">Carregando lista de ofertas...</span>
                                        </div>
                                    ) : (
                                        ofertasEncontradas ? ResultadoBuscarPorOfertas() :  RenderTodasOfertas()
                                    )
                                }
                            </div>
                     </div>
                    </div>
                        ) : (
                            ofertasEncontradas ? ResultadoBuscarPorOfertasMobile() :  RenderTodasOfertasMobile()
                        )
                    }
                </div>
           </main>
        </>
    )
}

export default MinhasOfertas;
