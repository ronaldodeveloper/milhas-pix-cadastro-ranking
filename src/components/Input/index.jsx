"use client";
import styles from "./Input.module.scss";

function Input({ iconeName, iconeCode, iconeImage, iconeMoney, label, type, disabled = false , id, name, value, onChange, required, placeholder, variante, readonly }) {
    // console.log(variante);
    
    return (
        <div className={`${styles.input_container}`}>
            {
                label && <label htmlFor={id} className={styles.label}>{label}</label>
            }
            <div className={styles.input_wrapper}>
                {
                    iconeCode &&  <span className={`${styles.country_code}`}>+55 <img src="/image/brasil-flag.svg" alt="Brazil flag" className={`${styles.flag}`} /></span>
                }
                {
                    iconeMoney && <span className={`${styles.iconeMoney}`}>R$</span>
                }
                <input
                    className={`${styles.input} ${styles[variante]}`}
                    type={type}
                    id={id}
                    name={name}
                    value={value}
                    disabled={disabled}
                    required={required}
                    readOnly={readonly}
                    placeholder={placeholder}
                    onChange={onChange}
                />
                {
                    iconeName && <span className={`icones ${iconeName} ${styles.icone}`}></span>
                }
                {
                    iconeImage && <img src={iconeImage} alt="" className={`${styles.icone_image}`}/>
                }
            </div>
        </div>
    )
}

export default Input;
