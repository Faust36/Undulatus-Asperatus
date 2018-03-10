import TrackIndexItem from './track_index_item';
import React from 'react';
const TrackIndexList = (props) =>{
  const tracks = props.tracks.map((track)=>{
    return <TrackIndexItem key={track.id} track={track} addSong={props.addSong}/>;
  });
    return (
        <div className="scrolling-wrapper">
          {tracks}
        </div>
    );
};

export default TrackIndexList;
