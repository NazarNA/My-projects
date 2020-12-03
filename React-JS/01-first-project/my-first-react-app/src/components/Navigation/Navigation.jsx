import React from 'react';
import { NavLink } from 'react-router-dom';
import FriendsList from './Friends/FriendsList';
import style from './Navigation.module.css';

const Navigation = (props) => {
    return(
        <nav className = {style.navigation}>
        <div className= {style.navItem}><NavLink to = '/profile' activeClassName={style.activeLink}>Profile</NavLink></div>
        <div className= {style.navItem}><NavLink to = '/dialogs' activeClassName={style.activeLink}>Messages</NavLink></div>
        <div className= {style.navItem}><NavLink to = '/news' activeClassName={style.activeLink}>News</NavLink></div>
        <div className= {style.navItem}><NavLink to = '/music' activeClassName={style.activeLink}>Music</NavLink></div>
        <div className= {`${style.navItem} ${style.item5}`}><NavLink to = '/settings' activeClassName={style.activeLink}>Settings</NavLink></div>
              
        <FriendsList friendsData={props.friendsData} />
      </nav>

    );
}

export default Navigation;