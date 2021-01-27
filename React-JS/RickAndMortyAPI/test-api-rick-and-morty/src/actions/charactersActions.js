import { 
    CHANGE_PAGE,
    FETCH_CHARACTERS_BEGIN, 
    FETCH_CHARACTERS_FAILURE, 
    FETCH_CHARACTERS_SUCCESS, 
    SET_SPECIES, 
    SET_STATUS, 
    SET_GENDER 
} from "../types/charactersTypes";

export const fetchCharactersBegin = () => ({type: FETCH_CHARACTERS_BEGIN});
export const fetchCharactersSuccess = (characters) => ({type: FETCH_CHARACTERS_SUCCESS, payload: characters});
export const fetchCharactersFailure = (error) => ({type: FETCH_CHARACTERS_FAILURE, payload: { error }});

export const fetchCharacters = (page, species = '', status = '', gender = '') => {
    return dispatch => {
        dispatch(fetchCharactersBegin())
        fetch(`https://rickandmortyapi.com/api/character//?page=${page + 1}&species=${species}&status=${status}&gender=${gender}`)
        .then(response => response.json())
        .then(data => dispatch(fetchCharactersSuccess(data)))
        .catch(error => dispatch(fetchCharactersFailure(error)))
    }
}

export const changePage = (page) => ({type: CHANGE_PAGE, payload: page});
export const setSpecies = (species) => ({type: SET_SPECIES, payload: species});
export const setStatus = (status) => ({type: SET_STATUS, payload: status});
export const setGender = (gender) => ({type: SET_GENDER, payload: gender});