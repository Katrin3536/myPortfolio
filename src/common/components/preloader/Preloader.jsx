import preloader from '../../../assets/image/preloader.gif';
import React from 'react';
import styles from './Preloader.module.scss'

export const Preloader = () => {
    return <div className={styles.container}>
        <img className={styles.img} src={preloader}/>
    </div>
}