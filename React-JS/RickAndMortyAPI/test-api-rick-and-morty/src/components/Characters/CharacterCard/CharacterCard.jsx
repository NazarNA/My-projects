import React from 'react';

import './CharacterCard.scss'

const CharacterCard = ({ char }) => {
    return (
        <div className='character-card'>
            <img className='character-card__img' src={char.image} alt="character_img"/>
            <div className='character-card__content'>
                <div><h2>{char.name}</h2></div>
                <div><span>{char.species}</span> - <span>{char.status}</span></div>
                <div>Location: {char.location.name}</div>
                {char.type ? <div>Type: {char.type}</div> : null}
            </div>
            <div className='character-card__info focused'>
                <h3>created:</h3>
                <div>{char.created}</div>
            </div>
        </div>
    );
}

export default CharacterCard;
