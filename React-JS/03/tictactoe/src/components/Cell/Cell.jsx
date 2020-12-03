import React, { useState } from 'react';
import style from './Cell.module.css'

const Cell = () => {

   const [value, setValue] = useState(null)

    return (
        <div onClick={()=>{setValue('X'); if(value === 'X'){setValue('O')}}} className={style.cell}>
            {value}
        </div>
    );
}

export default Cell;
