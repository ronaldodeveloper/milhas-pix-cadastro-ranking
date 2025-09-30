"use client"

import { useState } from "react";
import styles from "./Button.module.scss";

function Header() {
  const [value, setValue] =  useState('283,12')
    return (
        <header className={styles.header}>
            <div className="container flex align-center justify-between">
                <img src="./image/logo.svg" alt="Logo Milhas Pix" className={styles.header_logo}/>
                <p className={styles.header_value}>
                    <span>{`R$ ${value}`}</span>
                </p>
            </div>
        </header>
    )
}

export default Header;