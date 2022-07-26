import React from "react";
import styles from './Footer.module.scss'
import styleContainer from "../common/styles/Container.module.scss";
import emailIcon from "../assets/image/email.png";
import linkedinIcon from "../assets/image/linkedin.png";
import telegramIcon from "../assets/image/telegram.png";
import whatsappIcon from "../assets/image/whatsapp.png";

function Footer() {
    const email = {
        backgroundImage: `url(${emailIcon})`,
    };
    const linkedin = {
        backgroundImage: `url(${linkedinIcon})`,
    };
    const telegram = {
        backgroundImage: `url(${telegramIcon})`,
    };
    const whatsapp = {
        backgroundImage: `url(${whatsappIcon})`,
    };
    return (
        <div className={styles.footerBlock}>
            <div className={`${styleContainer.container} ${styles.footerContainer}`}>
                <h3 className={styles.title}>Ekaterina Dudko</h3>
                <div className={styles.footer}>
                    <a href={'https://t.me/Kate3536'} style={telegram} className={styles.footerElements}/>
                    <a href={'http://linkedin.com/in/ekaterina-dudko-8281a7232'} style={linkedin}
                       className={styles.footerElements}/>
                    <a href={'mailto:dudko.katerina86@gmail.com'} style={email} className={styles.footerElements}/>
                    <a href={' https://wa.me/375297513774'} style={whatsapp} className={styles.footerElements}/>
                </div>
                <span>©2022 All rights reserved</span>
            </div>
        </div>
    );
}

export default Footer;
