import React from "react";
import styles from './Projects.module.scss'
import Project from "./project/Project";
import styleContainer from "../common/styles/Container.module.css";
import Title from "../common/components/title/Title";
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
          <Title text={'MY PROJECTS'}/>
            <div className={styles.projects}>
                <Project style={socialNetwork} title = {"Social Network"} description={"TS, Redux, RestAPI, Thunk, ANT Design, Unit-Tests"}/>
                <Project style={todolist} title = {"ToDoList"} description={"TS, Redux, RestAPI, Thunk,Material UI, Unit-Tests"}/>
                <Project style={counter} title = {"Counter"} description={"My first project with React /Redux /TS etc"}/>
                <Project style={cards} title = {"Training cards"} description={"It was a command work. App for learning some cards"}/>
            </div>
        </div>
    </div>
);
}

export default Projects;
