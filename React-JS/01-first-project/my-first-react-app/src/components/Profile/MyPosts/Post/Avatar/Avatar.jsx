import React from 'react';
import style from './Avatar.module.css';

const Avatar = (props) => {
    return (
        <div className={style.wrapper}>
            <div className={style.avatar}><img src={props.url} alt="avatar" /></div>
        </div>
    );
}

export default Avatar;