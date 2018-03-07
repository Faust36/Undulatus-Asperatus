import React from 'react';


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
        <button className="login-button">{currentUser.username}</button>
        <button className="nav-button-orange" onClick={logout}>Logout</button>
      </nav>
    )
  }

  return(
    currentUser ? userNav(currentUser, logout) : sessionLinks()
  )
}

export default Greeting;
