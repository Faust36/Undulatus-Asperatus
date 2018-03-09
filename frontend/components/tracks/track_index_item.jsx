import React from 'react';
import{Link} from 'react-router-dom';

const TrackIndexItem = ({track}) =>{
  return (
    <div className="box">
      <ul className='track-list-items'>
        <li><img className="track-list-image"src={track.artwork_url}/></li>
        <Link to={`/tracks/${track.id}`} style={{textDecoration:'none', color:'black'}}><li className="track-list-title">{track.title}</li></Link>
        <li className="track-list-genre">{track.genre}</li>
      </ul>
    </div>
  )
};

export default TrackIndexItem;
