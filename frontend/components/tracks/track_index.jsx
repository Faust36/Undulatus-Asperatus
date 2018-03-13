import React from 'react';
import {Link} from 'react-router-dom';
import TrackIndexList from './track_index_list';

class TrackIndex extends React.Component {

  componentDidMount(){
    this.props.fetchAllTracks();
  }

  render(){
    return(
      <div className="main-container-left">
        <TrackIndexList tracks={this.props.tracks} addSong={this.props.addSong} receiveCurrentSong={this.props.receiveCurrentSong}/>
      </div>
    );
  }
}

export default TrackIndex;
