import React  from 'react';
import CharacterCard from '../CharacterCard/CharacterCard';


import './CharacterList.scss';

const CharacterList = ({ rickAndMortyChars }) => {

    return (
        <div className="char-list">
            {[...rickAndMortyChars].map(char => (
            <CharacterCard key={char.id} char={char} />
            ))}
        </div>
    );
}

export default CharacterList;
