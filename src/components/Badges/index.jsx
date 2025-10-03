"use client";

import styles from "./Badges.module.scss";

function Badges ({children, variante}) {
    return (
        <span className={`${styles.badges} ${styles[variante]}`}>
            <span className={styles.badges_icon}></span>
            {children}
        </span>
    )
}

export default Badges;