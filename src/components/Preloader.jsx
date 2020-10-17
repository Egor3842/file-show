import React from 'react';
import preloader from '../assets/img/preview.gif';
import s from '../assets/styles/Preloader.module.css';

function Preloader() {
    return (
        <div className={s.container}>
            <img src={preloader} alt='' />
        </div>

    )
}

export default Preloader