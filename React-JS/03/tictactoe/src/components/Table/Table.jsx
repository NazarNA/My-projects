import React, { useState } from 'react';
import Cell from '../Cell/Cell';
import style from './Table.module.css'

const Table = () => {


    const [cells, setCells] = useState(Array(9).fill(null))

    return (
        <div className={style.tabbleWrapper}>
            {cells.map((cell,index) => (
               <Cell key={index} id={cell} cell={cell} />
             ))}
        </div>
    );
}

export default Table;
