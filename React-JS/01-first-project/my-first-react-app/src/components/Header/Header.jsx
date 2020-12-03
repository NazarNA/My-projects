import React from 'react';
import style from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return(
        <header className={style.header}>
          <NavLink to = '/profile'><img className={style.headerLogo}  src='https://images.vexels.com/media/users/3/137578/isolated/preview/c895a61e637f53ac91d5faf634c84794-cube-logo-geometric-polygonal-by-vexels.png' alt='logo' /></NavLink>
        </header>
    )
}

export default Header;