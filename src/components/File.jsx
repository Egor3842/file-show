import React from 'react';
import { TimeValidation } from '../utils/TimeValidation';
import s from '../assets/styles/File.module.css';

function File(props) {

    const { name, time, date } = { ...props };

    return (
        <div className={s.container + ' ' + s.font_styles}>
            <div className={s.name_container_left}>
                <div className={s.cirle_left}>
                </div>
                <div className={s.file_name_right}>
                    {name}
                </div>
            </div>
            <div className={s.date_container_right}>
                <div className={s.time_left}>
                    {TimeValidation(time.hours) + ':' +
                        TimeValidation(time.minutes) + ':' +
                        TimeValidation(time.seconds)}
                </div>
                <div className={s.date_right}>
                    {date.year + ':' +
                        TimeValidation(date.month) + ':' +
                        TimeValidation(date.day)}
                </div>
            </div>
        </div>
    )
}

export default File
