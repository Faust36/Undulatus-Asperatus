import React from 'react';

const Banner = (props)=>{

  if(!props.banner){
    return (
      <img className="banner" src={window.banner}/>
    );
  }else if (props.banner) {
    return (
      <img className="show-banner" src={props.banner}/>
    );
  }else{
    return null;
  }
};

export default Banner;
