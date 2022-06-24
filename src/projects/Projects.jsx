import React from "react";
import styles from './Projects.module.scss'
import Project from "./project/Project";
import styleContainer from "../common/styles/Container.module.css";
import Title from "../common/components/Title";
import socialNetImage from "../assets/image/Social-network.webp"
import todoImage from "../assets/image/todolist.jpg"
import counterImage from "../assets/image/counter.webp"
import cardsImage from "../assets/image/cards.jpg"


function Projects() {
    const socialNetwork = {
        backgroundImage: `url(${socialNetImage})`,
    };
    const todolist = {
        backgroundImage: `url(${todoImage})`,
    };
    const counter = {
        backgroundImage: `url(${counterImage})`,
    };
    const cards = {
        backgroundImage: `url(${cardsImage})`,
    };
return (
    <div className={styles.projectsBlock}>
        <div className={`${styleContainer.container} ${styles.projectsContainer}`}>
          <Title text={'Projects'}/>
            <div className={styles.projects}>
                <Project style={socialNetwork} title = {"Social Network"} description={"My first social network"}/>
                <Project style={todolist} title = {"ToDoList"} description={"This is the best todolist"}/>
                <Project style={counter} title = {"Counter"} description={"First counter"}/>
                <Project style={cards} title = {"Cards"} description={"Friday project"}/>
            </div>
        </div>
    </div>
);
}

export default Projects;
