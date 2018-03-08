import React from 'react';
import {Link} from 'react-router-dom';
import TrackIndexItem from './track_index_item';

class TrackIndex extends React.Component {

  componentDidMount(){
    this.props.fetchAllTracks();
  }

  render(){
    const tracks = this.props.tracks.map((track)=>{
      return <TrackIndexItem key={track.id} track={track}/>;
    });
    return (
      <div className="scrolling-wrapper">
        {tracks}
      </div>
    );
  }
}

export default TrackIndex;
