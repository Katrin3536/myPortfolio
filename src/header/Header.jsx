import React from "react";
import styles from './Header.module.scss'
import Nav from "./nav/Nav";
import NavBar from "./navBar/NavBar";

const Header = () => {
    return (
        <div className={styles.header}>
            <Nav/>
            <NavBar/>
        </div>
    );
}

export default Header;
