"use client"

import Badges from "../Badges";
import styles from "./CardOfertas.module.scss"

function CardOfertas({  title, status, data, id, login, ofertas, tipo }) {
    
    console.log(status);

    return (
        <div className={`${styles.card_ofertas}`}>
            <div className={styles.card_header}>
                <div className={styles.card_header_left}>
                    <img src="./image/logo-minhas-ofertas-smiles.jpg" alt="logo smiles" className={styles.card_header_image}/>
                    <h3 className={styles.card_header_title}>
                        <span className={`${title == "Smiles" ? "c-laranja" : "c-azul-claro"}`}>{`${title}`.replace(/([a-z])([A-Z])/g, '$1 $2')} </span>
                        <span className={``}>{tipo}</span>
                    </h3>
                </div>
                <div className={styles.card_header_right}>
                    <Badges variante={status}>{status}</Badges>
                    <span className={styles.card_header_data}>{data}</span>
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
                        <span>{ofertas}</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default CardOfertas;