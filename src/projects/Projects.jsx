import React from "react";
import styles from './Projects.module.scss'
import Project from "./project/Project";
import styleContainer from "../common/styles/Container.module.css";
import Title from "../common/components/title/Title";
import socialNetImage from "../assets/image/Social-network.webp"
import todoImage from "../assets/image/todolist.jpg"
import counterImage from "../assets/image/counter.webp"
import cardsImage from "../assets/image/cards.jpg"
import futureImage from "../assets/image/future.avif"


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
    const future = {
        backgroundImage: `url(${futureImage})`,
    };
    return (
        <div id={'projects'} className={styles.projectsBlock}>
            <div className={`${styleContainer.container} ${styles.projectsContainer}`}>
                <Title text={'MY PROJECTS'}/>
                <div className={styles.projects}>
                    <Project style={socialNetwork} title={"Social Network"}
                             description={"TS, Redux, RestAPI, Thunk, ANT Design, Unit-Tests"}
                             href={'https://katrin3536.github.io/samurai-way-main'}
                             hideButton={false}/>
                    <Project style={todolist} title={"ToDoList"}
                             description={"TS, Redux, RestAPI, Thunk,Material UI, Unit-Tests"}
                             href={'https://katrin3536.github.io/todolist'}
                             hideButton={false}/>
                    <Project style={counter} title={"Counter"}
                             description={"My first project with React /Redux /TS etc"}
                             href={'https://katrin3536.github.io/counters'}
                             hideButton={false}/>
                    <Project style={cards} title={"Training cards"}
                             description={"It was a command work. App for learning some cards"}
                             href={'https://katrin3536.github.io/cards'}
                             hideButton={false}/>
                    <Project style={future} title={"Future project"} description={"In progress"}
                             hideButton={true}/>
                    <Project style={future} title={"Future project"} description={"In progress"}
                             hideButton={true}/>
                </div>
            </div>
        </div>
    );
}

export default Projects;
