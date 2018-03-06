import React from 'react';
import { Link } from 'react-router-dom';


const sessionLinks = ()=>{
  return (
    <ul>
      <li><Link to='/login'>Login</Link></li>
      <li><Link to='/signup'>Sign Up</Link></li>
    </ul>
  );
};

const userNav = (currentUser, logout) =>{
  return (
    <ul>
      <li>{currentUser.username}</li>
      // <Link to={`api/users/${currentUser.id}`}>{currentUser.username}</Link>
      <li><button onClick={logout}>Log Out</button></li>
    </ul>
  );
};
