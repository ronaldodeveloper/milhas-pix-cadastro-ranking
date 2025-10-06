"use client";

import styles from "./Select.module.scss";  

function Select({ label, id, option, name, onChange, ...props }) {


    return (

        <div className={styles.select_container}>
            <label htmlFor={id} className={styles.label} onChange={onChange}>
                {label}
                <select name={name} id={id} className={styles.select} >
                    {
                        option && option.map((item, index) => {
                            return (
                                <option key={index} value={item}>{item}</option>
                            )
                        })
                    }
                </select>
                <img src="/image/caret-up-down.svg" alt="Seta para cima e para baixo" className={styles.caret} />
            </label>
        </div>
            
    );
}

export default Select;