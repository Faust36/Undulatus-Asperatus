import React from 'react';


class Playbar extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      currentSong: this.props.currentSong,
      isPlaying: this.props.playlist.length === 0 ? true : false
    }
    this.playOrPause = this.playOrPause.bind(this)
    this.togglePlay = this.togglePlay.bind(this)
  }

  componentDidMount(){
    if(this.props.playlist.length !== 0){
      this.props.receiveCurrentSong(this.props.playlist.shift())
    }
  }

  nextSong(){
    if(this.props.playlist.length !== 0){
      this.props.receiveCurrentSong(this.props.playlist.shift())
    }
  }

  componentWillReceiveProps(nextProps){
    if(this.state.currentSong !== nextProps.currentSong){
      this.setState({currentSong:nextProps.currentSong, isPlaying: true})
    }
  }
  // shouldComponentUpdate(nextProps, nextState){
  //   debugger
  //   return this.props.currentSong !== nextProps.currentSong
  // }

  increaseVol(){

  }

  playOrPause(){
    if(this.state.isPlaying === false){
      return(<button className="play" onClick={this.togglePlay}>Play</button>)
    }else{
      return(<button className="pause" onClick={this.togglePlay}>Pause</button>)
    }
  }

  togglePlay(){
    if(this.state.isPlaying === false){
      this.setState({isPlaying: true});
      this.song.play();
    }else{
      this.setState({isPlaying: false});
      this.song.pause()
    }
  }

  render(){
    if(!this.state.currentSong){
      return null
    }
    const song = <audio src={this.state.currentSong.song_url} ref={el => {this.song = el;}} autoPlay/>
    return(
      <footer className="main-footer">
        {song}
        <div className="audio-player">
          {this.playOrPause()}
          <input type='range'/>
        </div>
      </footer>
    )

  }
}

export default Playbar;
