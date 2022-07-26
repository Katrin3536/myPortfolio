import React from "react";
import styles from './Main.module.scss'
import ReactTypingEffect from 'react-typing-effect'

const Main = () => {
    return (
        <div id={'main'} className={styles.mainBlock}>
            <div className={styles.mainContainer}>
                <div className={styles.greeting}>
                    <span>HELLO, MY NAME IS</span>
                    <h1>EKATERINA DUDKO</h1>
                    <ReactTypingEffect
                        text={"I'M FRONT-END DEVELOPER"}
                        typingDelay={1000}
                        speed={150}
                        eraseDelay={1500}
                    />
                    {/*<p>I'M FRONT-END DEVELOPER</p>*/}
                </div>
                <div className={styles.photo}>
                </div>
            </div>

        </div>
    );
}

export default Main;