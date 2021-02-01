import { 
    CHANGE_PAGE, 
    FETCH_CHARACTERS_BEGGIN, 
    FETCH_CHARACTERS_FAILURE, 
    FETCH_CHARACTERS_SUCCESS,
    SET_SPECIES, 
    SET_STATUS, 
    SET_GENDER 
} from "../types/charactersTypes"

const initialState = {
    characters: [],
    loading: false,
    pages: 0,
    page: 0,
    species: '',
    status: '',
    gender: '',
    error: null
}

export const charactersReducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_CHARACTERS_BEGGIN:
            return {
                ...state,
                loading: true
            }
        case FETCH_CHARACTERS_SUCCESS:
            return {
                ...state,
                loading: false,
                characters: action.payload.results,
                pages: action.payload.info.pages,
            }
        case FETCH_CHARACTERS_FAILURE:
            return {
                ...state,
                error: action.payload.error
            }
        case CHANGE_PAGE:
            return {
                ...state,
                loading: false,
                page: action.payload
            }
        case SET_SPECIES:
            return {
                ...state,
                species: action.payload
            }
        case SET_STATUS:
            return {
                ...state,
                status: action.payload
            }
        case SET_GENDER:
            return {
                ...state,
                gender: action.payload
            }
        default:
            return state
    }
}