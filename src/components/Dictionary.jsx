import React from 'react';
import s from '../assets/styles/Dictionary.module.css'

function Dictionary() {
    return (
        <div className={s.container}>
            <table>
                <tr>
                    <td> <div className={s.circle}></div></td>
                    <td>Файл</td>
                </tr>
                <tr>
                    <td> <div className={s.rectangle}></div></td>
                    <td>Директория</td>
                </tr>
            </table>
        </div>

    )
}

export default Dictionary