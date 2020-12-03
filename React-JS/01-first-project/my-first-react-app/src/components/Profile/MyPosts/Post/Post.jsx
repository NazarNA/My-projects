import React from 'react';
import style from './Post.module.css';
import Avatar from './Avatar/Avatar';
import {useState} from 'react'

const Post = (props) => {

    const [count, setCount] = useState(0);

    return (
        <div className={style.wrapper}>
            <Avatar url = 'https://medialeaks.ru/wp-content/uploads/2020/01/egirl-500x500.jpg' />
            <div className={style.post_content}>{props.text}
                <div>
    <span className={style.like}>likes - {props.likesCount}, count - {count}</span><br/>
    <button onClick={() => setCount(count + 1)}>Count + 1</button>
    <button onClick={() => setCount(0)}>Count = 0</button>
                </div>
            </div>

        </div>
    );
}

export default Post;