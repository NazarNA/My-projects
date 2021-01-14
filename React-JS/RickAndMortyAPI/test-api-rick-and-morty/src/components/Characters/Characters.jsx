import React, { useEffect, useState } from 'react';
import CharacterList from './CharacterList/CharacterList';
import FilterPanel from './FilterPanel/FilterPanel';
import ReactPaginate from 'react-paginate';
import { CircularProgress } from '@material-ui/core';


import './Characters.scss';

function Characters() {
  const staticUrl = 'https://rickandmortyapi.com/api/character';

  const [rickAndMortyChars, setRickAndMortyChars] = useState([]) ;
  const [pages, setPages] = useState();
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState();
  const [currentPageUrl, setCurrentPageUrl] = useState(`https://rickandmortyapi.com/api/character`);
  
  const [SPECIES, setSPECIES] = useState('');
  const [STATUS, setSTATUS] = useState('');
  const [GENDER, setGENDER] = useState('');
    
  useEffect(()=>{
    setLoading(true)
    fetch(staticUrl)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      setLoading(false)
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
      setRickAndMortyChars(data.results);
      setPages(data.info.pages)
    })
  },[currentPageUrl])

  useEffect(() => {
    setCurrentPageUrl(`${staticUrl}/?page=${page + 1}&species=${SPECIES || ''}&status=${STATUS || ''}&gender=${GENDER || ''}`)
},[page, SPECIES, STATUS, GENDER])

  const speciesHandler = (e) => setSPECIES(e.target.value)

  const statusHandler = (e) => setSTATUS(e.target.value)

  const genderHandler = (e) => setGENDER(e.target.value)

  const handlePageClick = (e) => setPage(e.selected)

  console.log(window.location.pathname); //yields: "/js" (where snippets run)
  console.log(window.location.href); 


  if(loading){
    return (
      <div className='progress'><CircularProgress /></div>
    )
  }

  return (
    <div className='wrapper'>
      <div className='char-list__filter'>
        <FilterPanel
          SPECIES={SPECIES}
          STATUS={STATUS}
          GENDER={GENDER}
          genderHandler={genderHandler}        
          statusHandler={statusHandler}
          speciesHandler={speciesHandler} 
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
