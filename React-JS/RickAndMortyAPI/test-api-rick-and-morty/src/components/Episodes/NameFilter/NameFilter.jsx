import React,{ useRef } from 'react';

import './NameFilter.scss'

const NameFilter = ({ findByName, resetHandler }) => {
    let searchValue = useRef()
    
    return (
        <div className='filter-input'>
            <form>
                <input 
                    placeholder='Enter name...'
                    ref={searchValue}
                />
                <button onClick={() => findByName(searchValue)}>search</button>
                <button onClick={resetHandler}>reset</button>
            </form>
        </div>
    );
}

export default NameFilter;
