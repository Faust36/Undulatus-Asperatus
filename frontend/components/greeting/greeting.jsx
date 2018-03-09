import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({currentUser, logout, openModal}) =>{

  const sessionLinks = ()=>{
    return (
      <nav className='session-nav'>
        <button className="login-button" onClick={() => openModal('login')}>Login</button>
        <button className="nav-button-orange" onClick={() => openModal('signup')}>Signup</button>
      </nav>
    );
  };

  const userNav = () =>{
    return (
      <nav className="session-nav">
        <Link style={{textDecoration:'none', color:'black'}} to={`/users/${currentUser.id}`}>
          <button className="login-button">{currentUser.username}</button>
        </Link>
        <button className="nav-button-orange" onClick={logout}>Logout</button>
      </nav>
    )
  }

  return(
    currentUser ? userNav(currentUser, logout) : sessionLinks()
  )
}

export default Greeting;
