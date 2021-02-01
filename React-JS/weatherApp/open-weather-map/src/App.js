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
    <div className='container-fluid'>
      <ul className="list-group list-group-flush col-md-4 border border-primary m-5">
        <li className="list-group-item d-flex flex-row justify-content-evenly">
          <div className='d-flex align-items-center'>
            {formater(description)}
          </div>
          <div>
            <img src={`https://openweathermap.org/img/wn/${icon}.png`} />
          </div>
        </li>
        <li className="list-group-item d-flex flex-row justify-content-evenly">
          <div>
            <img className="img-fluid" style={{width: 25 + 'px'}} src='https://www.freepngimg.com/thumb/map/62759-computer-location-icon-icons-free-download-png-hd.png'/> 
          </div>
          <div className='d-flex align-items-center'>
            {formater(city)} {country && country}
          </div>
        </li>
        <li className="list-group-item d-flex flex-row justify-content-evenly">
          <div className='d-flex flex-row'>
            <img className="img-fluid" style={{width: 35 + 'px'}} src='https://i.pinimg.com/originals/b2/d6/c2/b2d6c24a4a7f3f0529c2efdaeff54bc5.png'/> 
          </div>
          <div className='d-flex align-items-center'>
            {parseInt(temp) - 273}&deg;С
          </div>
        </li>
        <li className="list-group-item d-flex flex-row justify-content-evenly">
          <div className='d-flex flex-row'>
            <img className="img-fluid" style={{width: 35 + 'px'}} src='https://image.flaticon.com/icons/png/512/219/219816.png' /> 
          </div>
          <div className='d-flex align-items-center'>
            {humidity + '%'}
          </div>
        </li>
      </ul>
      <div className="col-md-4 ms-5">
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
