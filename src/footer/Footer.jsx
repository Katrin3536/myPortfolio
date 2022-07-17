import React from "react";
import styles from './Footer.module.scss'
import styleContainer from "../common/styles/Container.module.css";
import e_mail from "../assets/image/gmail.png";
import linkd from "../assets/image/linkedin.png";
import telegram from "../assets/image/telegram.png";
import whatsapp from "../assets/image/whatsapp.png";

function Footer() {
    const email = {
        backgroundImage: `url(${e_mail})`,
    };
    const linkedin = {
        backgroundImage: `url(${linkd})`,
    };
    const telegramm = {
        backgroundImage: `url(${telegram})`,
    };
    const whatsup = {
        backgroundImage: `url(${whatsapp})`,
    };
    return (
        <div className={styles.footerBlock}>
            <div className={`${styleContainer.container} ${styles.footerContainer}`}>
                <h3 className={styles.title}>Ekaterina Dudko</h3>
                <div className={styles.footer}>
                    <div style={telegramm} className={styles.footerElements}></div>
                    <div style={linkedin} className={styles.footerElements}></div>
                    <div style={email} className={styles.footerElements}></div>
                    <div style={whatsup} className={styles.footerElements}></div>
                </div>
                <span>©2022 All rights reserved</span>
            </div>
        </div>
    );
}

export default Footer;
