import React, {useState} from "react";
import styles from './NavBar.module.scss'
import {Link} from "react-scroll"
import menu from '../../assets/image/list.png'


function NavBar() {
    const [openMenu, setOpenMenu] = useState(false)
    const toggleMenu = () => {
        setOpenMenu(!openMenu)
    }
    return (
        <div className={styles.navBar}>
            <div className={openMenu ? `${styles.navBarItems} ${styles.show}` : styles.navBarItems}>
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
                    offset={-82}
                    duration={500}
                    spyThrottle={500}
                >PROJECTS</Link>
                <Link
                    className={styles.link}
                    activeClass={styles.active}
                    to="contacts"
                    spy={true}
                    smooth={true}
                    offset={-79}
                    duration={500}
                    spyThrottle={500}
                >CONTACTS</Link>
            </div>
            <div className={styles.btn} onClick={toggleMenu}>
                <img src={menu} className={styles.icon}></img>
            </div>
        </div>
    );
}

export default NavBar;
