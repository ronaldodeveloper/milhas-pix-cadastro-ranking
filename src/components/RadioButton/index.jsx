"use client";
import styles from "./RadioButton.module.scss";

function RadioButton({ image, alt, label, value, name, isChecked, onChange, active, defaultChecked, id, variante, ...props }) {
      
    return (
        <label className={`${styles.radio_button} ${active ? styles.active : ''} ${variante ? styles[variante]: ''}`} htmlFor={value}>
            <input
                className={styles.input}
                type="radio"
                id={value}
                name={name}
                value={value}
                onChange={onChange}
                checked={isChecked}
                {...props}
            />
            {
              label ? <span className={styles.label}>{label}</span> : <img className={`${styles.image} ${value &&styles[value]}`} src={image} alt={`Logo ${alt}`} {...props} />
            }
        </label>
    );
}

export default RadioButton;