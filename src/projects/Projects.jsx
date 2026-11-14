import React from 'react';
import styles from './Projects.module.scss';
import Project from './project/Project';
import styleContainer from '../common/styles/Container.module.scss';
import Title from '../common/components/title/Title';
import todoImage from '../assets/image/todolist.jpg';
import cardsImage from '../assets/image/cards.jpg';
import carImage from '../assets/image/rolls.png';
import kinoImage from '../assets/image/kinopoisk.png';


function Projects() {
    const todolist = {
        backgroundImage: `url(${todoImage})`,
    };
    const cards = {
        backgroundImage: `url(${cardsImage})`,
    };
    const car = {
        backgroundImage: `url(${carImage})`,
        backgroundSize: 'contain'
    };
    const socialNetwork = {
        backgroundImage: `url(${kinoImage})`,
    };
    return (<div id={'projects'} className={styles.projectsBlock}>
        <div className={`${styleContainer.container} ${styles.projectsContainer}`}>
            <Title text={'MY PROJECTS'}/>
            <div className={styles.projects}>
                <Project style={socialNetwork} title={'TMDB Cinema'}
                         description={'Application for searching movies and TV shows'}
                         href={'https://tmdb-moviecards-rosy.vercel.app'}
                         hideButton={false}/>
                <Project style={todolist} title={'Zapison'}
                         description={'Application for creating and managing services'}
                         href={'https://zapison.by'}
                         hideButton={false}/>
                <Project style={cards} title={'Training cards'}
                         description={'Educational application for learning some cards'}
                         href={'https://katrin3536.github.io/cards'}
                         hideButton={false}/>
                <Project style={car} title={'Сar rental service'}
                         description={'Luxury and sport rental service with Angular'}
                         href={'https://katrin3536.github.io/rent-cars-service'}
                         hideButton={false}/>
            </div>
        </div>
    </div>);
}

export default Projects;
