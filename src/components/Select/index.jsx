"use client";

import styles from "./Select.module.scss";  

function Select({ label, id, option }) {


    return (

        <div className={styles.select_container}>
            <label htmlFor={id} className={styles.label}>
                {label}
                <select name="selectedFruit" id={id} className={styles.select}>
                    <option value="Selecione-Produto"></option>
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