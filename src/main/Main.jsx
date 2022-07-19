import React from "react";
import styles from './Main.module.scss'

const Main = () => {
    return (
        <div id={'main'} className={styles.mainBlock}>
            <div className={styles.mainContainer}>
                <div className={styles.greeting}>
                    <span>HELLO, MY NAME IS</span>
                    <h1>EKATERINA DUDKO</h1>
                    <p>I'M FRONT-END DEVELOPER</p>
                </div>
                <div className={styles.photo}>
                </div>
            </div>

        </div>
    );
}

export default Main;