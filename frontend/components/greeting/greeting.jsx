import React from 'react';
import { Link } from 'react-router-dom';
import LoginFormContainer from '../session/login_form_container';
import SignupFormContainer from '../session/signup_form_container';
import NewTrackFormContainer from '../tracks/new_track_form_container';

const Greeting = ({currentUser, logout, openModal}) =>{

  const sessionLinks = ()=>{
    return (
      <nav className='session-nav'>
        <button
          className="login-button"
          onClick={() => openModal(<LoginFormContainer/>)}>
          Login
        </button>
        <button
          className="nav-button-orange"
          onClick={() => openModal(<SignupFormContainer/>)}>
          Signup
        </button>
      </nav>
    );
  };

  const userNav = () =>{
    return (
      <nav className="session-nav">
        <button
          onClick={()=> openModal(<NewTrackFormContainer/>)}
          className='upload-button'>Upload
        </button>
        <Link className="user-link"style={{textDecoration:'none', color:'black'}} to={`/users/${currentUser.id}`}>
          <button className="login-button">{currentUser.username}</button>
        </Link>
        <Link to='/'>
          <button className="nav-button-orange"
            onClick={logout}>Logout
          </button>
        </Link>
      </nav>
    )
  }

  return(
    currentUser ? userNav(currentUser, logout) : sessionLinks()
  )
}

export default Greeting;
