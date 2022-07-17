import React from "react";
import styles from './RemoteWork.module.scss'
import styleContainer from "../common/styles/Container.module.css";

function RemoteWork() {
    return (
        <div className={styles.remoteWork}>
            <div className={styles.remoteWorkContainer}>
                <h3 className={styles.title}>I'M CONSIDERING REMOTE WORK OPTIONS</h3>
                <a className={styles.link} href="">HIRE ME</a>
            </div>
        </div>
    );
}

export default RemoteWork;
