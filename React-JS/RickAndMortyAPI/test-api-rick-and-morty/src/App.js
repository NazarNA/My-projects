import React, { useEffect, useState } from 'react';
import CharacterList from './components/CharacterList/CharacterList';
import FilterPanel from './components/FilterPanel/FilterPanel';

import './App.scss';

function App() {

  const [rickAndMortyChars, setRickAndMortyChars] = useState([]) 
    
  useEffect(()=>{
    fetch("https://rickandmortyapi.com/api/character")
      .then(response => response.json())
      .then(data => setRickAndMortyChars(data.results))
  },[])  

  const handleFilter = (e) => {   
    debugger
    setRickAndMortyChars([...rickAndMortyChars].filter(char => (
      char[e.target.name] == char[e.target.id]
    )))
    console.log(rickAndMortyChars);
  }
  
  console.log(rickAndMortyChars);

  return (
    <div className='wrapper'>
      <div className='char-list__filter'>
        <FilterPanel characters={rickAndMortyChars} handleFilter={handleFilter} />
      </div>
      <CharacterList rickAndMortyChars={rickAndMortyChars}/>
    </div>
  );
}

export default App;
