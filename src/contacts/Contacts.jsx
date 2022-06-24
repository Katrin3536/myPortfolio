import React from "react";
import styles from './Contacts.module.scss'
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
                    <button type='submit' className={styles.link}>Submit</button>
                </form>
            </div>
        </div>
    );
}

export default Contacts;
