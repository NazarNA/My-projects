import React, { useEffect, useRef } from 'react'
import { connect } from 'react-redux';
import { fetchWeather, setCity } from './actions/actions';


const App = ({ loading, icon, temp, humidity, description, country, city, fetchWeather, setCity }) => {

  //value from inpput
  const input = useRef()
  
  //react, render JSX based on state from store
  useEffect(()=> fetchWeather(city),[city])

  const formater = word => word.slice(0,1).toUpperCase() + word.slice(1);

  if(loading) return <div>Loading...</div>
  
  return (
    <div className='container-md mt-2 d-flex flex-column '>
      <ul className="list-group list-group-flush col-md-4 border border-primary">
        <li className="list-group-item d-flex flex-row justify-content-between">
          <div className='d-flex align-items-center'>
            {formater(description)}
          </div>
          <div>
            <img src={`https://openweathermap.org/img/wn/${icon}.png`} />
          </div>
        </li>
        <li className="list-group-item d-flex flex-row justify-content-between">
          <div>
            <img className="img-fluid" style={{width: 25 + 'px'}} src='https://uxwing.com/wp-content/themes/uxwing/download/21-maps-and-location/find-location.png'/> 
          </div>
          <div className='d-flex align-items-center'>
            {formater(city)} {country && country}
          </div>
        </li>
        <li className="list-group-item d-flex flex-row justify-content-between">
          <div className='d-flex flex-row'>
            <img className="img-fluid" style={{width: 35 + 'px'}} src='https://cdn0.iconfinder.com/data/icons/auto-workshop/50/51-512.png'/> 
          </div>
          <div className='d-flex align-items-center'>
            {parseInt(temp) - 273}&deg;С
          </div>
        </li>
        <li className="list-group-item d-flex flex-row justify-content-between">
          <div className='d-flex flex-row'>
            <img className="img-fluid" style={{width: 35 + 'px'}} src='https://image.flaticon.com/icons/png/512/219/219816.png' /> 
          </div>
          <div className='d-flex align-items-center'>
            {humidity + '%'}
          </div>
        </li>
      </ul>
      <div className="col-md-4 mt-1">
        <input type="text" ref={input} className="form-control col-md-4" placeholder="City..." />
        <button onClick={()=> setCity(input.current.value)} className="btn btn-primary mt-1 col-md-12" type="button">Weather</button>
      </div>
    </div>
  )
}

export default connect(
  state => ({
    loading: state.loading,
    icon: state.icon,
    temp: state.temp,
    humidity: state.humidity,
    description: state.description,
    country: state.country,
    city: state.city
  }),
  dispatch => ({
    fetchWeather: city => dispatch(fetchWeather(city)),
    setCity: city => dispatch(setCity(city))
  })
)(App);
