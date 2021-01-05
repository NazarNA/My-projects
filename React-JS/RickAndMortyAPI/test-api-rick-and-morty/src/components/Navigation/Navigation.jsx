import React from 'react';
import { Link } from "react-router-dom";

import './Navigation.scss'

const Navigation = () => {
    return (
        <div className='nav'>
                <Link to='/characters' className='nav-link'>Characters</Link>
                <Link to='/episodes' className='nav-link'>Episodes</Link>
                <Link to='/locations' className='nav-link'>Locations</Link>
                <Link to='/watchlist' className='nav-link'>My watch list</Link>
        </div>
    );
}

export default Navigation;
