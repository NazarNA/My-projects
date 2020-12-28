import React from 'react';

import './FilterPanel.scss'

const FilterPanel = ({ handleFilter }) => {

    return (
        <div className="filter-panel" onChange={(e) => handleFilter(e)}>
            <div>
                Species
                <form>
                    <input type="checkbox" id="Human" name="species" />
                    <label htmlFor="Human">Human</label><br />
                    <input type="checkbox" id="Alien" name="species" />
                    <label htmlFor="Alien">Alien</label><br />
                </form>
            </div>
            <div>
                Status
                <form>
                    <input type="checkbox" id="Alive" name="status"/>
                    <label htmlFor="alive">Alive</label><br />
                    <input type="checkbox" id="Dead" name="status" />
                    <label htmlFor="dead">Dead</label><br />
                    <input type="checkbox" id="Unknown" name="status" />
                    <label htmlFor="unknown">Unknown</label><br />
                </form>
            </div>
            <div>
                Gender
                <form>
                    <input type="checkbox" id="Male" name="gender" />
                    <label htmlFor="male">Male</label><br />
                    <input type="checkbox" id="Female" name="gender" />
                    <label htmlFor="female">Female</label><br />
                </form>
            </div>
        </div>
    );
}

export default FilterPanel;
