import React from 'react';

import './NameFilter.scss'

const NameFilter = ({ episodes, findByName, staticState }) => {
    return (
        <div className='filter-input'>
            <form>
                <input 
                    placeholder='Enter name...' 
                    onChange={e => findByName(e)} 
                />
            </form>
        </div>
    );
}

export default NameFilter;
