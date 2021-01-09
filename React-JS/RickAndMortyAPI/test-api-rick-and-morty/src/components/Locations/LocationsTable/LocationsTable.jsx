import React from 'react';

import '../../Episodes/Episodes.scss'

const LocationsTable = ({ name, dimension, type }) => {
    return (
        <tr>
            <td>{name}</td>
            <td>{dimension}</td>
            <td>{type}</td>
        </tr>

    );
}

export default LocationsTable;
