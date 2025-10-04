"use client"

import Badges from "../Badges";
import styles from "./CardOfertas.module.scss"
import {  formatDateBR, formatMilhas, StateProgram, FormatStringLogo  } from "../../util";

function CardOfertas({  title, status, data, id, login, ofertas, tipo }) {

    return (
        <div className={`${styles.card_ofertas}`}>
            <div className={styles.card_header}>
                <div className={styles.card_header_left}>
                    <img src={`/image/logo-minhas-ofertas-${FormatStringLogo(title)}.jpg`} alt={`Logo ${title}`} className={styles.card_header_image}/>
                    <h3 className={styles.card_header_title}>
                        <span className={`${title == "Smiles" ? "c-laranja" : "c-azul-claro"}`}>{`${title}`.replace(/([a-z])([A-Z])/g, '$1 $2')} </span>
                        <span className={styles.card_header_tipo}>{tipo}</span>
                    </h3>
                </div>
                <div className={styles.card_header_right}>
                    <Badges variante={StateProgram(status)}>{status}</Badges>
                    <span className={styles.card_header_data}>{formatDateBR(data)}</span>
                </div>
            </div>
            <div className={styles.card_body}>
                <ul className={styles.card_list}>
                    <li className={styles.card_list_item}>
                        <strong>ID da oferta</strong>
                        <span>{id}</span>
                    </li>
                    <li className={styles.card_list_item}>
                        <strong>Login</strong>
                        <span>{login}</span>
                    </li>
                    <li className={styles.card_list_item}>
                        <strong>Milhas ofertadas</strong>
                        <span>{formatMilhas(ofertas)}</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default CardOfertas;