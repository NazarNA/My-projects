import {
    FETCH_WEATHER_BEGGIN,
    FETCH_WEATHER_FAILURE,
    FETCH_WEATHER_SUCCESS,
    SET_CITY
} from "../types/types";

const initialState = {
    loading: false,
    icon: '',
    temp: '',
    humidity: '',
    description: '',
    country: '',
    error: null,
    city: 'Lviv',
}

export const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_WEATHER_BEGGIN:
            return {...state, loading: true}
        case FETCH_WEATHER_FAILURE:
            return {...state, loading: false, error: action.payload}
        case FETCH_WEATHER_SUCCESS:
            return {...state,
                loading: false,
                icon: action.payload.weather[0].icon,
                temp: action.payload.main.temp,
                humidity: action.payload.main.humidity,
                description: action.payload.weather[0].description,
                country: action.payload.sys.country
            }
        case SET_CITY:
            return {...state, city: action.payload}
        default:
            return state
    }
}