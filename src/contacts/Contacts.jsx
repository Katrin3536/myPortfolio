import React from "react";
import styles from './Contacts.module.scss'
import styleContainer from "../common/styles/Container.module.css";
import Form from "../common/components/form/Form";

const Contacts = () => {
    return (
        <div className={styles.contactsBlock}>
            <div className={`${styleContainer.container} ${styles.contactsContainer}`}>
                <h3 className={styles.title}>CONTACTS</h3>
                <Form/>
            </div>
        </div>
    );
}

export default Contacts;
