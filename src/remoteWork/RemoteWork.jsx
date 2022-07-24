import React, {useState} from "react";
import styles from './RemoteWork.module.scss'
import Title from "../common/components/title/Title";
import Modal from "../common/components/modal/Modal";

function RemoteWork() {
    const [showModal, setShowModal] = useState(false);

    const openModal = () => setShowModal(true);
    const closeModal = () => setShowModal(false);

    return (
        <div id={'remoteWork'} className={styles.remoteWork}>
            <div className={styles.remoteWorkContainer}>
                <Title className={styles.title} text={'I\'M CONSIDERING REMOTE WORK OPTIONS'}/>
                <button className={styles.link} onClick={openModal}>HIRE ME</button>
                {showModal && <Modal onClose={closeModal}/>}
            </div>
        </div>
    );
}

export default RemoteWork;
