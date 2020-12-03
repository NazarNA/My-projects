import React from 'react';
import { NavLink } from 'react-router-dom';
import Avatar from '../../Profile/MyPosts/Post/Avatar/Avatar';
import style from './../Dialogs.module.css';

const DialogItem = (props) => {
  
let path = '/dialogs/' + props.id;  

  return(
<div className={style.dialog}>
            <Avatar url={props.url}/>
            <NavLink to={path}  activeClassName={style.activeDialog}>{props.name}</NavLink>
          </div>
  )
}

export default DialogItem; 