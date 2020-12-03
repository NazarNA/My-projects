import React from 'react';
import Friend from './Friend/Friend';
import style from './FriendsList.module.css';

const FriendsList = (props) => {
  return (
    <div className={style.friendsListWrapper}>
      <h2 className={style.title}>Friends</h2>
      <div className={style.friends}>
        {props.friendsData.map((el) => {
          return <Friend name={el.name} id={el.id} url={el.url}/>
        })}
      </div>
    </div>
  );
}

export default FriendsList;