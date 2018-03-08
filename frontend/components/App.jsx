import React from 'react';
import Modal from './modal/modal';
import GreetingContainer from './greeting/greeting_container';
import {Link, Route, Switch} from 'react-router-dom';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import TrackIndexContainer from './tracks/track_index_container';

const App = () =>{
  return(
    <div className="app">
      <Modal />
      <header className="main-header">
        <div className="header-left">
          <Link to='/'><div className="header-logo">Undulatus Asperatus</div></Link>
        </div>
        <div className="header-right">
          <GreetingContainer/>
        </div>
      </header>

      <img className="banner" src={window.banner}/>
      <TrackIndexContainer/>
    </div>
  );
};

export default App;
