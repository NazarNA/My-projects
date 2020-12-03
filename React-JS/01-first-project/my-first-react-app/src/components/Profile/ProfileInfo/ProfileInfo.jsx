import React from 'react';
import style from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
  return (
    <div className={style.profile_content}>
      <img className={style.profile_img} src='http://www.mudanza-internacionales.com/wp-content/uploads/2016/06/Mudanzas-al-Reino-Unido.jpg' alt='main-img' />
      <div className={style.info}>
        <img src='https://gflclan.com/uploads/monthly_2018_11/0f837319a39026212f4597d6a57948ce2541dff2_full.jpg.3abe6b209c42299263c337a24d456310.jpg' alt='avatar' />
        <div className={style.info_about}>
          <h2>Novosad N.</h2>
          <p>Date of birth: 22 february<br />
                    City: Lviv<br />
                    Education: none
                 </p>
        </div>
      </div>
    </div>
  );
}

export default ProfileInfo;