import React, { useEffect, useState } from 'react';
import CharacterList from './CharacterList/CharacterList';
import FilterPanel from './FilterPanel/FilterPanel';
import ReactPaginate from 'react-paginate';
import { CircularProgress } from '@material-ui/core';


import './Characters.scss';

function Characters() {
  const staticUrl = 'https://rickandmortyapi.com/api/character';

  const [state, setState] = useState();
  const [rickAndMortyChars, setRickAndMortyChars] = useState([]) ;
  const [pages, setPages] = useState();
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState();
  const [currentPageUrl, setCurrentPageUrl] = useState(`https://rickandmortyapi.com/api/character`);
  
  const [SPECIES, setSPECIES] = useState([]);
  const [STATUS, setSTATUS] = useState([]);
  const [GENDER, setGENDER] = useState([]);
    
  useEffect(()=>{
    setLoading(true)
    fetch(staticUrl)
    .then(response => response.json())
    .then(data => {
      setLoading(false)
      setState(data.results);
      setRickAndMortyChars(data.results);
      setPages(data.info.pages)
    })
  },[])

  useEffect(()=>{
    setLoading(true)
    fetch(currentPageUrl)
    .then(response => response.json())
    .then(data => {
      setLoading(false)
      setState(data.results);
      setRickAndMortyChars(data.results);
    })
  },[currentPageUrl])

  
  useEffect(() => {
    setCurrentPageUrl(`${staticUrl}/?page=${page + 1}`)
  },[page])
  
  const allBtnHandler = () => {
    const copy = state
    setRickAndMortyChars(copy)
  }

  const filterSpecies = (e) => {
    const copy = state
    setSPECIES([...copy].filter(char => (
      char.species === e.target.innerHTML
    )))
    setRickAndMortyChars([...copy].filter(char => (
      char.species === e.target.innerHTML
    )))    
  }

  const filterAlive = (e) => {
    const copy = state
    setSTATUS([...copy].filter(char => (
      char.status === e.target.innerHTML
    )))

    setRickAndMortyChars([...copy].filter(char => (
      char.status === e.target.innerHTML
    ))) 
  }

  const filterByGender = (e) => {
    const copy = state
    setGENDER([...copy].filter(char => (
      char.gender === e.target.innerHTML
    )))
    setRickAndMortyChars([...copy].filter(char => (
      char.gender === e.target.innerHTML
    )))  
  }

  const globalCharFilter = (e) => {
  }

  const handlePageClick = (e) => {
    const selectedPage = e.selected
    setPage(selectedPage)
  }

  if(loading){
    return (
      <div className='progres'><CircularProgress /></div>
    )
  }

  return (
    <div className='wrapper'>
      <div className='char-list__filter'>
        <FilterPanel 
          characters={rickAndMortyChars}  
          filterSpecies={filterSpecies} 
          filterAlive={filterAlive} 
          filterByGender={filterByGender} 
          allBtnHandler={allBtnHandler}
          globalCharFilter={globalCharFilter}
        />
      </div>
      <CharacterList rickAndMortyChars={rickAndMortyChars}/>
      <ReactPaginate 
        previousLabel={"<"}
        nextLabel={">"}
        breakLabel={"..."}
        pageCount={pages}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        activeClassName={"active"}
        pageLinkClassName={"pagination"}
        initialPage={page}
        />
    </div>
  )
}

export default Characters;
