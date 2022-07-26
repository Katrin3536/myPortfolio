import React, {useRef} from 'react';
import styles from './AnswerMessage.module.scss'
import {useEscapeKey, useOnClickOutside} from "../../utils/utils";

const AnswerMessage = ({onClose}) => {
    const ref = useRef();
    useOnClickOutside(ref, onClose);
    useEscapeKey(onClose);

    return (
        <div className={styles.container}>
            <div className={styles.modal} ref={ref}>
                <button className={styles.buttonClose} onClick={onClose}>X</button>
                <h1 className={styles.text}>THANK YOU FOR YOUR MESSAGE!</h1>
            </div>
        </div>
    )
};

export default AnswerMessage;





