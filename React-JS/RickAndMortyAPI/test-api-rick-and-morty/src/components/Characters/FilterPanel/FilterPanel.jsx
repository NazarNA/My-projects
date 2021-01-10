import React from 'react';

import './FilterPanel.scss'

const FilterPanel = ({ speciesHandler, statusHandler, genderHandler, SPECIES, STATUS, GENDER }) => {

    return (
        <div className="filter-panel">
            <div>
                 Species:
             <select value={SPECIES} onChange={(e)=> speciesHandler(e)}>
                    <option value='' >All</option>
                    <option value='human' >Human</option>
                    <option value='alien' >Alien</option>
                </select>
            </div>
            <div>
                Status:
             <select value={STATUS} onChange={e => statusHandler(e)}>
                    <option value=''>All</option>
                    <option value='alive' >Alive</option>
                    <option value='dead' >Dead</option>
                    <option value='unknown' >unknown</option>
                </select>
            </div>
            <div>
                Gender:
             <select value={GENDER} onChange={e => genderHandler(e)}>
                    <option value='' >All</option>
                    <option value='male' >Male</option>
                    <option value='female' >Female</option>
                </select>
            </div>
        </div>
    );
}

export default FilterPanel;
