import React from "react";
import styles from './Main.module.scss'

const Main = () => {
    return (
        <div className={styles.mainBlock}>
            <div className={styles.mainContainer}>
                <div className={styles.greeting}>
                    <span>Hi There!</span>
                    <h1>I am Ekaterina Dudko</h1>
                    <p>Frontend developer</p>
                </div>
                <div className={styles.photo}>
                </div>
            </div>

        </div>
    );
}

export default Main;