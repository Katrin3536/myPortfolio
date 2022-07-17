import React from 'react';
import styles from './Form.module.scss'

const Form = () => {
    return (
            <div className={styles.container}>
                <form className={styles.form}>
                    <div className={styles.row}>
                        <div className={styles.col}>
                            <input type="text" id="name" name="name" placeholder="Your name.."/>
                        </div>
                    </div>
                    <div className={styles.row}>
                        <div className={styles.col}>
                            <input type="text" id="email" name="email" placeholder="Your email.."/>
                        </div>
                    </div>
                    <div className={styles.row}>
                        <div className={styles.col}>
                            <textarea id="subject" name="subject" placeholder="Enter your message"
                                      style={{height:"150px"}}/>
                        </div>
                    </div>
                    <br/>
                        <div className={styles.row}>
                            <input type="submit"  value="SEND MESSAGE"/>
                        </div>
                </form>
            </div>
    )
};

export default Form;





