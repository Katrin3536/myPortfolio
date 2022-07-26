import React, {useRef, useState} from 'react';
import styles from './Modal.module.scss'
import {useForm} from "react-hook-form";
import axios from "axios";
import {useEscapeKey, useOnClickOutside} from "../../utils/utils";
import AnswerMessage from "../answerMessage/AnswerMessage";
import {Preloader} from "../preloader/Preloader";

const Modal = ({onClose}) => {
    const [showWindow, setShowWindow] = useState(false);
    const [status, setStatus] = useState('main');

    const [btnDisable, setBtnDisable] = useState(false);
    const ref = useRef();
    useOnClickOutside(ref, onClose);
    useEscapeKey(onClose);

    const {register, handleSubmit, reset, formState: {errors}} = useForm();
    const onSubmit = (data) => {
        setBtnDisable(true)
        setStatus('loading')
        axios.post("https://smtp-nodejss.herokuapp.com/sendForm", {data})
            .then((res) => {
                setShowWindow(true)
                setStatus('message')
            });
        reset()
    }

    return (
        <div className={styles.container}>
            {!showWindow ?
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className={styles.form}
                    ref={ref}
                >
                    <button className={styles.buttonClose} onClick={onClose}>X</button>
                    <div className={styles.row}>
                        <div className={styles.col}>
                            <input {...register("name", {required: true})} type="text" id="name"
                                   placeholder="Your name..."/>
                            {errors.name && <span>This field is required</span>}
                        </div>
                    </div>
                    <div className={styles.row}>
                        <div className={styles.col}>
                            <input {...register("company", {required: true})} type="text" id="company"
                                   placeholder="Your company..."/>
                            {errors.company && <span>This field is required</span>}
                        </div>
                    </div>
                    <div className={styles.row}>
                        <div className={styles.col}>
                            <input {...register("email", {
                                required: true,
                                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
                            })}
                                   type="text" id="email"
                                   placeholder="Your email..."/>
                            {errors.email && <span>Please, check your email address</span>}
                        </div>
                    </div>
                    <div className={styles.row}>
                        <div className={styles.col}>
                            <textarea id="subject" {...register("subject")} placeholder="Enter your message"
                                      style={{height: "150px"}}/>
                        </div>
                    </div>
                    <br/>
                    <div className={styles.row}>
                        <input type="submit" value="SEND MESSAGE" disabled={btnDisable}/>
                    </div>
                </form>
                : <AnswerMessage onClose={onClose}/>
            }
            {status === 'loading' ? <Preloader/> : null}
        </div>
    )
};

export default Modal;





