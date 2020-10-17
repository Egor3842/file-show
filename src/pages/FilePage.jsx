import React, { useEffect, useState } from 'react';
import { MainApi } from '../API/Api';
import File from '../components/File';
import s from '../assets/styles/FilePage.module.css';
import Title from '../components/Title';
import Preloader from '../components/Preloader';
import Notification from '../components/Notification';
import Dictionary from '../components/Dictionary';

function FilePage() {

    const [isFetching, setFetching] = useState(false);
    const [files, setFiles] = useState([]);
    const [isError, setError] = useState(false)

    useEffect(() => {
        const loadProduct = async () => {
            try {
                setFetching(true);
                const response = await MainApi.getFileData()
                setFiles(response.data);
                setFetching(false);
            } catch {
                setFetching(false);
                setError(true);
            }
        };
        loadProduct();
    }, []);

    const AllFiles = files.map(file =>
        <File
            key={file.id}
            {...file}
        />)

    return (
        <div className={s.container}>
            <div className={s.header_container}>
                <Title
                    length={files.length}
                />
                <Dictionary />
            </div>
            <div>
                {
                    isFetching ?
                        <Preloader /> :
                        isError ?
                            <Notification error="Ошибка при получении данных" /> :
                            AllFiles
                }
            </div>
        </div>
    )
}

export default FilePage