import React,{ useRef } from 'react';

import './NameFilter.scss'

const NameFilter = ({ findByName, resetHandler,search }) => {
    let searchValue = useRef()
    
    return (
        <div className='filter-input'>
            <form>
                <input 
                    placeholder='Enter name...'
                    ref={searchValue}
                    // value={search}
                />
                <button onClick={(e) => {
                    e.preventDefault()
                    findByName(searchValue)
                }}>search</button>
                <button onClick={resetHandler}>reset</button>
            </form>
        </div>
    );
}

export default NameFilter;
