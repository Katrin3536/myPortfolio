import React from "react";
import styles from './Project.module.scss'

function Project(props) {
    console.log('props', props)
    return (
        !props.hideButton
            ? <div className={styles.project}>
                <div className={styles.icon} style={props.style}>
                    <a className={styles.iconButton} href={props.href} target={'_blank'}>VIEW PROJECT</a>
                </div>
                <div className={styles.projectInfo}>
                    <h4 className={styles.titleProject}>{props.title}</h4>
                    <span className={styles.description}>{props.description}</span>
                </div>
            </div>
            : <div className={styles.project}>
                <div className={styles.icon} style={props.style}>
                </div>
                <div className={styles.projectInfo}>
                    <h4 className={styles.titleProject}>{props.title}</h4>
                    <span className={styles.description}>{props.description}</span>
                </div>
            </div>
    );
}

export default Project;
