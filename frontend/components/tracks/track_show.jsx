import BannerContainer from '../banner/banner_container';
import React from 'react';
import { Link } from 'react-router-dom';

class Track extends React.Component {

  componentDidMount(){
    this.props.fetchTrack(this.props.match.params.trackId);
  }

  componentWillReceiveProps(nextProps){
    if(this.props.match.params.trackId !== nextProps.match.params.trackId){
      this.props.fetchTrack(nextProps.match.params.trackId);
    }
  }

  render(){
    if(!this.props.track){
      return null;
    }
    return(
      <div className="track-body">
        <div className="track-banner">
          <img className="track-art"src={this.props.track.artwork_url}/>
        </div>
        <div className="main-container-left">
          <div className="track-body-artist">
            <Link to={`/users/${this.props.artist.id}`} style={{textDecoration:'none', color:'black'}}>
              <img className="artist-port" src={this.props.artist.avatar_url}/>
              <h4 className="artist-name">{this.props.artist.username}</h4>
          </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Track;
