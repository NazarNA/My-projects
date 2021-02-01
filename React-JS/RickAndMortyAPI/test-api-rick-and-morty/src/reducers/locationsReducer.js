import { 
    CHANGE_PAGE,
    FETCH_LOCATIONS_BEGGIN, 
    FETCH_LOCATIONS_FAILURE, 
    FETCH_LOCATIONS_SUCCESS, 
    SET_DIMENSION, 
    SET_NAME,
    SET_TYPE
} from "../types/locationsTypes";

const initialState = {
    locations: [],
    page:0,
    pages:0,
    error: null,
    loading: false,
    name: '',
    type: '',
    dimension: ''
}

export const locationsReducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_LOCATIONS_BEGGIN:
            return {...state, loading: true}
        case FETCH_LOCATIONS_SUCCESS:
            return {
                ...state,
                loading: false,
                locations: action.payload.results,
                pages: action.payload.info.pages
            }
        case FETCH_LOCATIONS_FAILURE:
            return {...state, loading: false}
        case CHANGE_PAGE:
            return {...state, page: action.payload}
        case SET_NAME:
            return {...state, name: action.payload}
        case SET_TYPE:
            return {...state, type: action.payload}
        case SET_DIMENSION:
            return {...state, dimension: action.payload}
        default:
            return state
    }
}