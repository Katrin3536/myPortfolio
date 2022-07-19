import React from "react";
import styles from './Title.module.scss'

function Title(props) {
    return (
        <div className={`${styles.title} ${props.className}`}>
            <h3>{props.text}</h3>
        </div>
    );
}

export default Title;
