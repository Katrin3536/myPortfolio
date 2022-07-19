import React from "react";
import styles from './Nav.module.scss'
import {Link} from "react-scroll"


function Nav() {
    return (
        <div className={styles.nav}>
            <Link
                className={styles.link}
                activeClass={styles.active}
                to="main"
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
            >HOME</Link>
            <Link
                className={styles.link}
                activeClass={styles.active}
                to="skills"
                spy={true}
                smooth={true}
                offset={-77}
                duration={500}
                spyThrottle={500}
            >SKILLS</Link>
            <Link
                className={styles.link}
                activeClass={styles.active}
                to="projects"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                spyThrottle={500}
            >PROJECTS</Link>
            <Link
                className={styles.link}
                activeClass={styles.active}
                to="contacts"
                spy={true}
                smooth={true}
                offset={-52}
                duration={500}
                spyThrottle={500}
            >CONTACTS</Link>
        </div>
    );
}

export default Nav;
