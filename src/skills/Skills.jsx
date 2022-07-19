import React from "react";
import styles from './Skills.module.scss'
import styleContainer from '../common/styles/Container.module.css'
import Skill from "./skill/Skill";
import Title from "../common/components/title/Title";
import developIcon from "../assets/image/coding.png";
import foundationIcon from "../assets/image/foundation.png";
import testingIcon from "../assets/image/search.png";
import designIcon from "../assets/image/web-design.png";

const Skills = () => {
    const development = {
        backgroundImage: `url(${developIcon})`,
    };
    const foundation = {
        backgroundImage: `url(${foundationIcon})`,
    };
    const testing = {
        backgroundImage: `url(${testingIcon})`,
    };
    const design = {
        backgroundImage: `url(${designIcon})`,
    };
    return (
        <div id={'skills'} className={styles.skillsBlock}>
            <div className={`${styleContainer.container} ${styles.skillsContainer}`}>
                <Title text={'MY SKILLS'}/>
                <div className={styles.skills}>
                    <Skill icon={development} title={'DEVELOPMENT'}
                           description={'React, Redux, AXIOS, REST-API etc'}/>
                    <Skill icon={foundation} title={"FOUNDATION"}
                           description={'Javascript, Typescript, GIT, HTML5, CSS3, SASS etc'}/>
                    <Skill icon={testing} title={"TESTING"}
                           description={'Unit-Tests, Storybook, TDD, SnapShot'}/>
                    <Skill icon={design} title={"DESIGN"}
                           description={'Material-UI, Ant Design etc'}/>
                </div>
            </div>
        </div>
    );
}

export default Skills;