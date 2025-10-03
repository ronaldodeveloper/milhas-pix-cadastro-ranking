"use client";
import styles from "./RadioButton.module.scss";

function RadioButton({ image, alt, label, value, name, isChecked, onChange, active, ...props }) {
    return (
        <label className={`${styles.radio_button} ${active && styles.active}`} htmlFor={value}>
            <input
                className={styles.input}
                type="radio"
                id={value}
                name={name}
                value={value}
                checked={isChecked}
                onChange={onChange}
            />
            {
              label ? <span className={styles.label}>{label}</span> : <img className={styles.image} src={image} alt={alt} {...props} />
            }
        </label>
    );
}

export default RadioButton;