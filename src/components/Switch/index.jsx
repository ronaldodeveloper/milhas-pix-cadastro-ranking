
"use client"

import styles from "./Switch.module.scss"

function Switch({ checked, onChange, message}) {
    return (
        <div className={styles.switch_container}>
            <label className={styles.switch}>
                <input type="checkbox" className={styles.checkbox} checked={checked} onChange={onChange} />
                <span className={styles.slider}></span>
            </label>
            <span className={styles.message}>{message}</span>
        </div>
    )
}

export default Switch;