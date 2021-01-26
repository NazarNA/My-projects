import React, {useEffect, useState} from 'react'

import './App.css';

function App() {
  const [state, setState] = useState({})
  
  useEffect(()=>{
      fetch("https://api.chucknorris.io/jokes/random")
        .then(res => res.json())
        .then(data => setState(data))
        .catch(e => console.log(e))
  },[])

  console.log(state);

  window.state = state;
  
  return (
    <div className="container-fluid">
      <div className="card" style={{width: 18 + 'rem'}}>
  <img src={state.icon_url} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">Chuk's joke</h5>
    <p className="card-text">{state.value}</p>
  </div>
</div>
    </div>
  )
}

export default App;
