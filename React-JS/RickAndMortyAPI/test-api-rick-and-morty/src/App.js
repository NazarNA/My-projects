import React from 'react';
import Characters from './components/Characters/Characters';
import { BrowserRouter, Route} from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import Locations from './components/Locations/Locations';
import Episodes from './components/Episodes/Episodes';
import MyWatchList from './components/MyWatchList/MyWatchList';

import './App.scss';

function App() {
  
  return (
      <BrowserRouter>
        <div className='app-wrapper'>
          <Navigation />
          <Route path='/characters' component={Characters} />
          <Route path='/episodes' component={Episodes} />
          <Route path='/locations' component={Locations} />
          <Route path='/watchlist' component={MyWatchList} />
        </div>
      </BrowserRouter>
  )
}

export default App;
