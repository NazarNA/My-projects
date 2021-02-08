import {
     CHANGE_EMAIL,
     CHANGE_NAME,
     CHANGE_PASSWORD,
     SUBMIT_FORM_FAILURE,
     SUBMIT_FORM_START,
     SUBMIT_FORM_SUCCESS 
} from "./types"

const initialState = {
    email: '',
    name: '',
    password: '',
    loader: false,
    error: null
}

export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_PASSWORD:
            return {...state, password: action.payload}
        case CHANGE_EMAIL:
            return {...state, email: action.payload}
        case CHANGE_NAME:
            return {...state, name: action.payload}
        case SUBMIT_FORM_START:
            return {...state, loader: true}
        case SUBMIT_FORM_SUCCESS:
            return {
                ...state,
                loader: false,
                email: '',
                name: '',
                password: '' 
            }
        case SUBMIT_FORM_FAILURE:
            return {
                ...state,
                loader: false,
                email: '',
                name: '',
                password: '',
                error: action.payload
            }
        default:
            return state
    }
}