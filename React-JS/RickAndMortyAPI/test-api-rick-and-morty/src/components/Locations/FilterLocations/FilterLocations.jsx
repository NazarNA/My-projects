import React, { useRef } from 'react';

import './FilterLocations.scss'

const FilterLocations = ({ searchNameHandler, searchTypeHandler, searchDimensionHandler, resetHandler }) => {
    const nameVal = useRef();
    const typeVal = useRef();
    const dimVal = useRef();
    
    return (
        <div className='locations-input'>
            <form>
                <input 
                    placeholder='Enter name...'
                    ref={nameVal}
                />
                <input 
                    placeholder='Enter dimension...'
                    ref={dimVal}
                />
                <input 
                    placeholder='Enter type...'
                    ref={typeVal}
                />
                <button type='submit' onClick={(e) => {
                    e.preventDefault()
                    searchNameHandler(nameVal)
                    searchTypeHandler(typeVal)
                    searchDimensionHandler(dimVal)
                }}>search</button>
                <button onClick={e => {
                    e.preventDefault();
                    resetHandler()
                }}>reset</button>
            </form>
        </div>
    );
}

export default FilterLocations;
