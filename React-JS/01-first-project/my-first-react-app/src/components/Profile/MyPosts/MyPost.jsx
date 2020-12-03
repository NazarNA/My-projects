import React from 'react';
import style from './MyPost.module.css';
import Post from './Post/Post';

const MyPost = (props) => {
    return (
        <div className={style.posts}>
            <div className={style.title}>
                My posts
              </div>
            <div>
                <textarea className={style.new_post_area} placeholder='your news...' name="new_post" id="new_post" ></textarea>
            </div>
            <div className={style.button_wrapper}>
                <button className={style.button_add}>Send</button>
            </div>
            <div>
                {props.postData.map(el => {
                    return <Post text={el.text}  likesCount={el.likesCount}/>
                })}
            </div>
        </div>
    );
}

export default MyPost;