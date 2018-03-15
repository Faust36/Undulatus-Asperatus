import React from 'react';
import{Link} from 'react-router-dom';


class TrackIndexItem extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      currentSong: this.props.currentSong
    }
    this.togglePlay = this.togglePlay.bind(this)
    this.assignClass = this.assignClass.bind(this)
  }

  componentWillReceiveProps(nextProps){
    if(this.state.currentSong !== nextProps.currentSong){
      this.setState({currentSong: nextProps.currentSong})
    }
  }

  assignClass(){
    if (this.props.isPlaying === false) {
      return 'play-button-hover'
    }else if (this.state.currentSong.id === this.props.track.id && this.props.isPlaying === true) {
      return 'pause-button-hover'
    }else if (this.state.currentSong.id !== this.props.track.id && this.props.isPlaying === true) {
      return 'play-button-hover'
    }
  }

  togglePlay(e){
    if ( !this.state.currentSong || this.state.currentSong.id !== this.props.track.id) {
       this.props.receiveCurrentSong(this.props.track)
    }else if (this.state.currentSong.id === this.props.track.id && this.props.isPlaying === false) {
      this.props.play();
    }else if (this.state.currentSong.id === this.props.track.id && this.props.isPlaying === true) {
      this.props.pause();
    }
  }

  render(){
    return (
      <div className="box">
        <ul className='track-list-items'>
          <li onClick={this.togglePlay} >
            <div className="art-tile">
              <div className={this.assignClass()}>
                <img  className="track-list-image" src={this.props.track.artwork_url}/>
              </div>
            </div>
          </li>
          <Link to={`/tracks/${this.props.track.id}`} style={{textDecoration:'none', color:'black'}}>
            <li className="track-list-title">{this.props.track.title}</li>
          </Link>
          <li className="track-list-genre">{this.props.track.genre}</li>
        </ul>
      </div>
    )
  }
}




export default TrackIndexItem;
