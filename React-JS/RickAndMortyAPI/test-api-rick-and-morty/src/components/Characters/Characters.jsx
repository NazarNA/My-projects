import React, { useEffect, useState } from 'react';
import CharacterList from './CharacterList/CharacterList';
import FilterPanel from './FilterPanel/FilterPanel';
import ReactPaginate from 'react-paginate';
import { CircularProgress } from '@material-ui/core';
import { useDispatch, useSelector } from "react-redux";
import { fetchCharacters, changePage, setSpecies, setStatus, setGender } from '../../actions/charactersActions';

import './Characters.scss';

function Characters() {
  // redux hooks
  const dispatch = useDispatch();

  const {characters, page, pages, loading, species, status, gender} = useSelector(
    state => ({
      characters: state.characters.characters,
      pages: state.characters.pages,
      loading: state.characters.loading,
      page: state.characters.page,
      species: state.characters.species,
      status: state.characters.status,
      gender: state.characters.gender,
    })
  );
  
  //react hooks
  useEffect(() => dispatch(fetchCharacters()), []);
  
  useEffect(() => {
    dispatch(fetchCharacters(page,species,status,gender))
  }, [page,species,status,gender]);

  //query search handlers
  const speciesHandler = e => dispatch(setSpecies(e.target.value));
  const statusHandler = e => dispatch(setStatus(e.target.value));
  const genderHandler = e => dispatch(setGender(e.target.value));
  
  //pagination handler
  const handlePageClick = e => dispatch(changePage(e.selected));

  //conditional rendering
  if(loading) return <div className='progress'><CircularProgress /></div>
    
  return (
    <div className='wrapper'>
      <div className='char-list__filter'>
        <FilterPanel
          SPECIES={species}
          STATUS={status}
          GENDER={gender}
          genderHandler={genderHandler}        
          statusHandler={statusHandler}
          speciesHandler={speciesHandler} 
        />
      </div>
      <CharacterList rickAndMortyChars={characters}/>
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
