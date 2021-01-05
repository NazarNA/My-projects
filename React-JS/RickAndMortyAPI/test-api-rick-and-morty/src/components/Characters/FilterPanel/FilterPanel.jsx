import React from 'react';

import './FilterPanel.scss'

const FilterPanel = ({ filterSpecies, filterAlive, filterByGender, allBtnHandler, globalCharFilter }) => {

    return (
        <div className="filter-panel" onClick={e => globalCharFilter(e)}>
            <div>
                <button onClick={allBtnHandler} className='all'>All</button>
            </div>
            <div onClick={(e) => filterSpecies(e)}>
                Species:
                     <button>Human</button>
                     <button>Alien</button>
            </div>
            <div onClick={(e) => filterAlive(e)}>
                Status:
                    <button>Alive</button>
                    <button>Dead</button>
                    <button>unknown</button>
            </div>
            <div onClick={(e) => filterByGender(e)}>
                Gender:
                    <button>Male</button>
                    <button>Female</button>
            </div>
        </div>
    );
}

export default FilterPanel;
