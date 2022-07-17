import React from "react";
import styles from './Skill.module.scss'

const Skill = (props) => {
    return (
        <div className={styles.skill}>
            <div className={styles.icon} style={props.icon}></div>
            <h3>{props.title}</h3>
            <span>{props.description}</span>
        </div>
    );
}

export default Skill;