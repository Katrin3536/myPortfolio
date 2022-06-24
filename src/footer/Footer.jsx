import React from "react";
import styles from './Footer.module.scss'
import styleContainer from "../common/styles/Container.module.css";

function Footer() {
    return (
        <div className={styles.footerBlock}>
            <div className={`${styleContainer.container} ${styles.footerContainer}`}>
                <h3 className={styles.title}>Ekaterina Dudko</h3>
                <div className={styles.footer}>
                    <div className={styles.footerElements}></div>
                    <div className={styles.footerElements}></div>
                    <div className={styles.footerElements}></div>
                    <div className={styles.footerElements}></div>
                </div>
                <span>©2022 All rights reserved</span>
            </div>
        </div>
    );
}

export default Footer;
