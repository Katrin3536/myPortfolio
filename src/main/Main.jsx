import React from "react";
import styles from './Main.module.css'
import styleContainer from "../common/styles/Container.module.css";

const Main = () => {
    return (
        <div className={styles.mainBlock}>
            <div className={styleContainer.container}>
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