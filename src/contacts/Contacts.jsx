import React, {useState} from "react";
import styles from './Contacts.module.scss'
import styleContainer from "../common/styles/Container.module.scss";
import Form from "../common/components/form/Form";
import Fade from 'react-reveal/Fade';
import Title from "../common/components/title/Title";
import AnswerMessage from "../common/components/answerMessage/AnswerMessage";
import {Preloader} from "../common/components/preloader/Preloader";

const Contacts = () => {
    const [showModal, setShowModal] = useState(false);
    const [status, setStatus] = useState('main');

    const openModal = () => setShowModal(true);
    const closeModal = () => setShowModal(false);

    return (
        <div id={'contacts'} className={styles.contactsBlock}>
            <div className={`${styleContainer.container} ${styles.contactsContainer}`}>
                <Title text={'CONTACTS'}/>
                <Fade left>
                    <Form openModal={openModal} setStatus={setStatus}/>
                </Fade>
                {status === 'loading' ? <Preloader/> : null}
                {showModal && <AnswerMessage onClose={closeModal}/>}
            </div>
        </div>
    );
}

export default Contacts;
