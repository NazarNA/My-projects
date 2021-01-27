import { 
    FETCH_LOCATIONS_BEGIN, 
    FETCH_LOCATIONS_FAILURE, 
    FETCH_LOCATIONS_SUCCESS, 
    SET_DIMENSION, 
    SET_NAME,
    SET_TYPE,
    CHANGE_PAGE
} from "../types/locationsTypes";

export const fetchLocationsBegin = () => ({type: FETCH_LOCATIONS_BEGIN})
export const fetchLocationsSuccess = locations => ({type: FETCH_LOCATIONS_SUCCESS, payload: locations})
export const fetchLocationsFailure = error => ({type: FETCH_LOCATIONS_FAILURE, payload: error})

export const fetchLocations = (page, name = '', type = '', dimension = '') =>{
    return dispatch => {
        dispatch(fetchLocationsBegin())
        fetch(`https://rickandmortyapi.com/api/location/?page=${page + 1}&name=${name && name.toLowerCase()}&type=${type && type.toLowerCase()}&dimension=${dimension && dimension.toLowerCase()}`)
            .then(response => response.json())
            .then(data => dispatch(fetchLocationsSuccess(data)))
            .catch(error => dispatch(fetchLocationsFailure(error)))
    }
}

export const changePage = page => ({type: CHANGE_PAGE, payload: page});
export const setName = name => ({type: SET_NAME, payload: name})
export const setType = type => ({type: SET_TYPE, payload: type})
export const setDimension = dimension => ({type: SET_DIMENSION, payload: dimension})