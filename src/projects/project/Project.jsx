import React from "react";
import styles from './Project.module.css'

function Project(props) {
    return (
        <div className={styles.project}>
            <div className={styles.icon}>
                <a href=""> Link to product </a>
            </div>
            <h4 className={styles.titleProject}>{props.title}</h4>
            <span className={styles.description}>{props.description}</span>
        </div>
    );
}

export default Project;
