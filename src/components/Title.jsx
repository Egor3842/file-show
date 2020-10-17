import React from 'react'

function Title(props) {

    const { length } = { ...props }

    return (
        <h1>
            Общее количество файлов: {length}
        </h1>
    )
}

export default Title