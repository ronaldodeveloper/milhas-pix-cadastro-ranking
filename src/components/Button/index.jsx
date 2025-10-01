"use client";

import styles from "./Button.module.scss";

function Button( { as = 'button', children , onClick , iconeName, iconeDirection, variante, ...ButtonProps} ) {
    const Element = as;
    
    return (
        <Element
            className={`${styles.button} ${styles[variante]}`}
            onClick={onClick}
            {...ButtonProps}>
                 { iconeName && iconeDirection === 'left' && <span className={`icones ${iconeName}`}></span> }
                 { children}
                 { iconeName && iconeDirection === 'right' && <span className={`icones ${iconeName}`}></span> }
        </Element>
    )
}

export default Button