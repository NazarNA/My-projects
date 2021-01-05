import React from 'react';

import './EpisodesTable.scss'

const EpisodesTable = ({ name, date, episode }) => {
    return (
        <tr>
            <td>{name}</td>
            <td>{date}</td>
            <td>{episode}</td>
        </tr>

    );
}

export default EpisodesTable;
