import React from 'react';

const TrackIndexItem = ({track}) =>{
  return (
    <div className="box">
      <img src={track.artwork_url}/>
      {track.title}
      {track.genre}
    </div>
  )
};

export default TrackIndexItem;
