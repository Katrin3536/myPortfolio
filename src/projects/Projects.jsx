import React from "react";
import styles from './Projects.module.css'
import Project from "./project/Project";
import styleContainer from "../common/styles/Container.module.css";

function Projects() {
    return (
        <div className={styles.projectsBlock}>
            <div className={`${styleContainer.container} ${styles.projectsContainer}`}>
                <h2 className={styles.title}>Projects</h2>
                <div className={styles.projects}>
                    <Project title = {"Social Network"} description={"My first social network"}/>
                    <Project title = {"ToDoList"} description={"This is the best todolist"}/>
                </div>
            </div>
        </div>
    );
}

export default Projects;
