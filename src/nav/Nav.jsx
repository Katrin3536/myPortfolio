import React from "react";
import styles from './Nav.module.scss'

function Nav() {
    return (
        <div className={styles.nav}>
            <a className={styles.link} href="">HOME</a>
            <a className={styles.link} href="">SKILLS</a>
            <a className={styles.link} href="">PROJECTS</a>
            <a className={styles.link} href="">CONTACT</a>
        </div>
    );
}

export default Nav;
