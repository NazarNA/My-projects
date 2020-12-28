import React from 'react';
import style from './Cell.module.css';

const Cell = ({ cell, id, onClick }) => {
    return (
        <div onClick={()=> onClick(id)} className={style.cell}>
            {cell}
        </div>
    );
}

export default Cell;
