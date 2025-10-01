"use client"
import styles from "./CardProgress.module.scss"

function CardProgress({ active = true , disabled = true , title, description }) {


    return (
        <div className={`
            ${styles.card_progress} 
            ${active && styles.active}
            ${disabled && styles.disabled}
           `}
            >
            <span className={styles.card_progress_circle}> 
                <span className={styles.card_progress_circle_inner}></span>
            </span>
            <div className={styles.card_progress_info}>
                <span className={styles.card_progress_info_title}>{title}</span>
                <span className={styles.card_progress_info_subtitle}>{description}</span>
            </div>
        </div>
    )
}

export default CardProgress;