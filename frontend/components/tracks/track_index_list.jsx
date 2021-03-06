import TrackIndexItem from './track_index_item_container';
import React from 'react';

const TrackIndexList = (props) =>{

  const tracks = props.tracks.map((track)=>{
    return (
      <TrackIndexItem
        key={track.id}
        track={track}
        />);
  });

  if(props.style === 'scroll'){
    return (
      <div className="scrolling-wrapper">
        {tracks}
      </div>
    );
  }else{
    return(
      <div>
        {tracks}
      </div>
    )
  }
};

export default TrackIndexList;
