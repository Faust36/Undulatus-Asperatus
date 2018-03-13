import React from 'react';


class Playbar extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      currentSong: this.props.currentSong,
      isPlaying: this.props.playlist.length === 0 ? true : false,
      haveMetadata: false,
      playlist: this.props.playlist
    }
    this.playOrPause = this.playOrPause.bind(this)
    this.togglePlay = this.togglePlay.bind(this)
    this.setVol = this.setVol.bind(this)
    this.updateMetadata = this.updateMetadata.bind(this)
    this.showDuration = this.showDuration.bind(this)
    this.incrementProgress = this.incrementProgress.bind(this)
    this.currentTime = this.currentTime.bind(this)
    this.nextSong = this.nextSong.bind(this)
    this.handleLoop = this.handleLoop.bind(this)
    this.loopColor = this.loopColor.bind(this)
  }

  componentDidMount(){
    if(this.props.playlist.length !== 0){
      this.props.removeFirstSong()
    }
  }

  nextSong(){
    if(this.props.playlist.length !== 0){
      this.props.removeFirstSong()
      this.setState({ haveMetadata: false });
      this.setState({currentSong:this.props.playlist[0]})
    }else{
      this.setState({ haveMetadata: false });
      this.props.removeCurrentSong()
    }
  }

  componentWillReceiveProps(nextProps){
    if(this.props.playlist.length !== nextProps.playlist.length){
      this.setState({currentSong:nextProps.playlist[0], isPlaying: true})
    }
  }

  setVol(e){
    this.song.volume = (e.currentTarget.value/100)
  }


  playOrPause(){
    if(this.state.isPlaying === false){
      return(
        <button className="play" onClick={this.togglePlay}>
          <img src={window.play} className="play-image"/>
        </button>)
    }else{
      return(
        <button className="pause" onClick={this.togglePlay}>
          <img src={window.pause} className="pause-image"/>
        </button>)
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

  showDuration() {
    if(this.state.haveMetadata){
      let minutes = Math.floor(this.song.duration/60)
      let seconds = Math.floor(this.song.duration%60)
      if(seconds < 10){
        return `${minutes}:0${seconds}`
      }else{
        return `${minutes}:${seconds}`
      }
    }else{
      return '00:00'
    }
  }

  updateMetadata(e) {
    this.setState({ haveMetadata: true });
  }

  progress() {
    return this.song ? this.state.currentTime : null
  }

  currentTime(){
    if(this.state.haveMetadata){
      let minutes = Math.floor(this.state.currentTime/60)
      let seconds = Math.floor(this.state.currentTime%60)
      if(seconds < 10){
        return `${minutes}:0${seconds}`
      }else{
        return `${minutes}:${seconds}`
      }
    }else{
      return '00:00'
    }
  }
  incrementProgress(){
    if(this.song){
      let percent = (this.state.currentTime/this.song.duration) * 100
      return{
        "width": `${percent}%`
      }
    }else{
      return{
        width:0
      }
    }
  }

  handleLoop(){
    if(this.state.haveMetadata){
      if(this.song.loop){
        this.song.loop = false
      }else{
        this.song.loop = true
      }
    }
  }
  loopColor(){
    if(this.state.haveMetadata){
      if(this.song.loop){
        return{
          "backgroundColor":"orange"
        }
      }else{
        return{
          "backgroundColor":"white"
        }
      }
    }
  }

  render(){
    if(!this.state.currentSong){
      return null
    }
    const song =
      <audio
        src={this.state.currentSong.song_url}
        ref={el => {this.song = el;}}
        onLoadedMetadata={this.updateMetadata}
        onTimeUpdate={() => {this.setState({ currentTime: this.song.currentTime })}}
        onEnded={this.nextSong}
        autoPlay
      />;

    return(
      <footer className="main-footer">
        {song}
        <div className="audio-player">
          {this.playOrPause()}
          <button className="loop" style={this.loopColor()}onClick={this.handleLoop} ref={el=>{this.loop = el}}>
            <img src={window.repeat} className="loop-image"/>
          </button>
          <div className="c-time">{ this.currentTime() }</div>
          <div className='progress-slide'>
            <div className='progress-range' style={this.incrementProgress()} ref={el=>{this.range = el}}></div>
          </div>
          <div className='f-time'>{ this.showDuration() }</div>
          <input
            className="volume-bar"
            type='range'
            onChange={this.setVol}
          />
        </div>
        <div className="song-info-box">
          <div>
            <img src={this.state.currentSong.artwork_url} className="art-thumb"/>
          </div>
          <div className="song-info">
            <div className='info1'>{this.state.currentSong.title}</div>
            <div className='info2'>{this.state.currentSong.genre}</div>
          </div>
        </div>
      </footer>
    )

  }
}

export default Playbar;
