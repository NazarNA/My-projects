import React from 'react';
import style from './Profile.module.css';
import MyPost from './MyPosts/MyPost.jsx';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
    return(
        <main className={style.profile_content}>
            <div className = {style.info}>
            </div>
            <ProfileInfo />
            <MyPost postData = {props.postData} />
          </main>
    );
}

export default Profile;