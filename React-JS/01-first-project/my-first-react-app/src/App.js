import React from 'react';
import './App.css';
import Header from './components/Header/Header.jsx';
import Navigation from './components/Navigation/Navigation.jsx';
import Profile from './components/Profile/Profile.jsx';
import './components/Header/Header.module.css'
import './components/Navigation/Navigation.module.css'
import './components/Profile/Profile.module.css'
import Dialogs from './components/Dialogs/Dialogs';
import {BrowserRouter, Route} from 'react-router-dom'
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';

const App = (props)=> {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <div className = 'content-wrapper'>
          <div className = 'side-bar'>  
          <Navigation friendsData={props.state.friendsPage.friendsData} />
          </div>   
          <Route path='/profile' render={ () => <Profile postData = {props.state.profilePage.postData} /> }/>
          <Route path='/dialogs' render={ () => <Dialogs dialogsData = {props.state.dialogsPage.dialogsData} messagesData = {props.state.dialogsPage.messagesData} /> }/>
          <Route path='/news' render={ () => <News /> }/>
          <Route path='/music' render={ () => <Music /> }/>
          <Route path='/settings' render={ () => <Settings /> }/>
        </div>  
      </div>
    </BrowserRouter>  
  );
}

export default App;
