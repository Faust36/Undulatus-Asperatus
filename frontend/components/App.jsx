import React from 'react';
import Modal from './modal/modal';
import GreetingContainer from './greeting/greeting_container';
import {Link, Route, Switch} from 'react-router-dom';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import TrackIndexContainer from './tracks/track_index_container';
import BannerContainer from './banner/banner_container';
import TrackShowContainer from './tracks/track_show_container';
import UserShowContainer from './users/user_show_container';
import PlaybarContainer from './playbar/playbar_container';

const App = () =>{
  return(
    <div className="app">
      <Modal />
      <header className="main-header">
        <nav className="main-nav">
          <div className="header-left">
            <div className="header-logo"><Link to='/'><img className='header-logo-image'src={window.logo}/></Link></div>
              <div className="info"><a href="http://github.com/Faust36" ><i className="fab fa-github fa-2x"></i></a></div>
              <div className="info"><a href="https://www.linkedin.com/in/fishj/" ><i className="fab fa-linkedin fa-2x"></i></a></div>
          </div>
          <div className="header-right">
            <GreetingContainer/>
          </div>
        </nav>
      </header>

      <div className="main-container">
        <div>
          <Route exact path='/' component={BannerContainer}/>
        </div>
        <div className='main-body'>
          <Route exact path='/' component={TrackIndexContainer}/>
          <Route path='/tracks/:trackId' component={TrackShowContainer}/>
          <Route path='/users/:userId' component={UserShowContainer}/>
        </div>
      </div>
      <PlaybarContainer/>
    </div>
  );
};

export default App;
