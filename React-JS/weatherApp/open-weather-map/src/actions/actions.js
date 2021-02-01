import {
    FETCH_WEATHER_BEGGIN,
    FETCH_WEATHER_FAILURE,
    FETCH_WEATHER_SUCCESS,
    SET_CITY
} from "../types/types";

export const fetchWeatherBeggin = () => ({type: FETCH_WEATHER_BEGGIN});
export const fetchWeatherSuccess = data => ({type: FETCH_WEATHER_SUCCESS, payload: data});
export const fetchWeatherFailure = e => ({type: FETCH_WEATHER_FAILURE, payload: e});
export const setCity = city => ({type: SET_CITY, payload: city});

export const fetchWeather = city => {
    return dispatch => {
        dispatch(fetchWeatherBeggin())
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${(city ? city : 'Lviv')}&lang=ua&appid=68190becf3a5583003f7194674a8b19e`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                dispatch(fetchWeatherSuccess(data))
            })
            .catch(e => dispatch(fetchWeatherFailure(e)))
    }
}