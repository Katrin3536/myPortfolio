import React from "react";
import styles from './RemoteWork.module.scss'
import Title from "../common/components/title/Title";

function RemoteWork() {
    return (
        <div id={'remoteWork'} className={styles.remoteWork}>
            <div className={styles.remoteWorkContainer}>
                <Title className={styles.title} text={'I\'M CONSIDERING REMOTE WORK OPTIONS'}/>
                <a className={styles.link} href="">HIRE ME</a>
            </div>
        </div>
    );
}

export default RemoteWork;
