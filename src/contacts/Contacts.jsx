import React from "react";
import styles from './Contacts.module.scss'
import styleContainer from "../common/styles/Container.module.css";
import Form from "../common/components/form/Form";
import Fade from 'react-reveal/Fade';
import Title from "../common/components/title/Title";

const Contacts = () => {
    return (
        <div id={'contacts'} className={styles.contactsBlock}>
            <div className={`${styleContainer.container} ${styles.contactsContainer}`}>
                <Title text={'CONTACTS'}/>
                <Fade left>
                    <Form/>
                </Fade>
            </div>
        </div>
    );
}

export default Contacts;
