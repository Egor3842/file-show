import React from 'react';
import { TimeValidation } from '../utils/TimeValidation';
import s from '../assets/styles/File.module.css';

function File(props) {
    
    const { name, time, type } = { ...props };
    const { hours, minutes, seconds } = { ...time.time };
    const { year, month, day } = { ...time.date }

    return (
        <div className={s.container + ' ' + s.font_styles}>
            <div className={s.name_container_left}>
                <div className={s.type + ' ' + 
                (type === 'file' ? s.cirle_left : s.rectangle_left)}>
                </div>
                <div className={s.file_name_right}>
                    {name}
                </div>
            </div>
            <div className={s.date_container_right}>
                <div className={s.time_left}>
                    {TimeValidation(hours) + ':' +
                        TimeValidation(minutes) + ':' +
                        TimeValidation(seconds)}
                </div>
                <div className={s.date_right}>
                    {year + ':' +
                        TimeValidation(month) + ':' +
                        TimeValidation(day)}
                </div>
            </div>
        </div>
    )
}

export default File
