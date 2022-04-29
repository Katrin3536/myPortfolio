import React from "react";
import styles from './Contacts.module.css'
import styleContainer from "../common/styles/Container.module.css";

const Contacts = () => {
    return (
        <div className={styles.contactsBlock}>
            <div className={`${styleContainer.container} ${styles.contactsContainer}`}>
                <h2 className={styles.title}>Contacts</h2>
                <form className={styles.form}>
                    <input/>
                    <input/>
                    <textarea cols="30" rows="5"></textarea>
                </form>
                <a className={styles.link} href="">Submit</a>
            </div>
        </div>
    );
}

export default Contacts;
