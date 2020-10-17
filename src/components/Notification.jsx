import React from 'react';
import s from '../assets/styles/Notification.module.css'

function Notification (props) {

    const {error} = {...props}

    return (
        <div className={s.container}>
            {error}
        </div>
    )
}
export default Notification