import React from 'react';
import Avatar from '../../../Profile/MyPosts/Post/Avatar/Avatar';
import style from './Friend.module.css';

const Friend = (props) => {
    return(
        <div className={style.friends}>
            <Avatar url={props.url}/>
            {props.name}
        </div>
    );
}

export default Friend;