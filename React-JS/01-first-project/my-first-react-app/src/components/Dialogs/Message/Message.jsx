import React from 'react';
import Avatar from '../../Profile/MyPosts/Post/Avatar/Avatar';
import style from './../Dialogs.module.css';


const Message = (props) => {

  return(
    <div className={style._messageAvatar}>    
      <Avatar url = {props.url}/>
      <div className={style.message}>{props.message}</div>
    </div>

  )

}

export default Message;