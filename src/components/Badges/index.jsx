"use client";

import styles from "./Badges.module.scss";

function Badges ({children, variante, isOutline}) {
    return (
        <span className={`${styles.badges} ${styles[variante]}`}>
            {!isOutline && <span className={styles.badges_icon}></span>}
            {children}
        </span>
    )
}

export default Badges;