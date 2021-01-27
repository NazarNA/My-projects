import { 
    CHANGE_PAGE,
    FETCH_EPISODES_BEGIN, 
    FETCH_EPISODES_FAILURE, 
    FETCH_EPISODES_SUCCESS, 
    SET_SEARCH, 
} from "../types/episodesTypes";

const initialState = {
    episodes: [],
    loading: false,
    pages: 0,
    page: 0,
    error: null,
    search: ''
}

export const episodesReducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_EPISODES_BEGIN:
            return {
                ...state,
                loading: true
            }
        case FETCH_EPISODES_SUCCESS:
            return {
                ...state,
                loading: false,
                episodes: action.payload.results,
                pages: action.payload.info.pages,
            }
        case FETCH_EPISODES_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error
            }
        case CHANGE_PAGE:
            return {
                ...state,
                page: action.payload
            }
        case SET_SEARCH:
            return {
                ...state,
                search: action.payload
            }
        default:
            return state
    }
}