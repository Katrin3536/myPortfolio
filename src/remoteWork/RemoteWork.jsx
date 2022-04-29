import React from "react";
import styles from './RemoteWork.module.css'
import styleContainer from "../common/styles/Container.module.css";

function RemoteWork() {
    return (
        <div className={styles.remoteWork}>
            <div className={`${styleContainer.container} ${styles.remoteWorkContainer}`}>
                <h3 className={styles.title}>I'm considering remote work options</h3>
                <a className={styles.link} href="">Hire me</a>
            </div>
        </div>
    );
}

export default RemoteWork;
