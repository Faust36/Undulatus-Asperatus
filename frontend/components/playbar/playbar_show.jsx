import React from 'react';


class Playbar extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      haveMetadata: false,
      playlist: this.props.playlist,
      playButtonClass: 'fas fa-pause fa-lg'
    }
    this.playOrPause = this.playOrPause.bind(this)
    this.togglePlay = this.togglePlay.bind(this)
    this.setVol = this.setVol.bind(this)
    this.updateMetadata = this.updateMetadata.bind(this)
    this.showDuration = this.showDuration.bind(this)
    // this.incrementProgress = this.incrementProgress.bind(this)
    this.currentTime = this.currentTime.bind(this)
    this.nextSong = this.nextSong.bind(this)
    this.handleLoop = this.handleLoop.bind(this)
    this.loopColor = this.loopColor.bind(this)
    this.currentTimeSec = this.currentTimeSec.bind(this)
    this.determineMax = this.determineMax.bind(this)
    this.setTime = this.setTime.bind(this)
  }



  nextSong(){
    if(this.props.playlist.length !== 0){
      this.props.removeFirstSong()
      this.setState({ haveMetadata: false });
      this.receiveCurrentSong(this.props.playlist[0])
    }else{
      this.setState({ haveMetadata: false });
      this.props.removeCurrentSong()
    }
  }


  setVol(e){
    this.song.volume = (e.currentTarget.value/100)
  }
  setTime(e){
    this.song.currentTime = (e.currentTarget.value)
  }


  playOrPause(){
    if(this.props.isPlaying === false){
      return(
          <i class="far fa-play-circle fa-lg"></i>
        )
    }else{
      return(
          <i class="far fa-pause-circle fa-lg"></i>
        )
    }
  }

  togglePlay(){
    if(this.props.isPlaying === false){
      this.props.play();
      this.song.play();
      this.setState({playButtonClass:"fas fa-pause fa-lg"})
    }else{
      this.props.pause()
      this.song.pause()
      this.setState({playButtonClass:"fas fa-play fa-lg"})
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

  determineMax(){
    if(this.song){
      return this.song.duration
    }else{
      return 0
    }
  }
  currentTimeSec(){
    if(this.song){
      return this.song.currentTime
    }else{
      return 0
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
          "color":"orange"
        }
      }else{
        return{
          "color":"black"
        }
      }
    }
  }

  render(){
    if(!this.props.currentSong){
      return null
    }
    if(this.props.isPlaying === false){
      this.song.pause()
    }else if (this.state.haveMetadata && this.props.isPlaying === true){
      this.song.play()
    }
    const song =
      <audio
        src={this.props.currentSong.song_url}
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
          <div className="play" onClick={this.togglePlay}>
            <i className={this.state.playButtonClass}></i>
          </div>
          <div className="loop" style={this.loopColor()}onClick={this.handleLoop} ref={el=>{this.loop = el}}>
            <i className="fas fa-retweet fa-lg"></i>
          </div>
          <div className="c-time">{ this.currentTime() }</div>
          <input
            className='progress-bar'
            type="range"
            min="0"
            step="0.001"
            max={this.determineMax()}
            value={this.currentTimeSec()}
            onChange={this.setTime}
          />
          <div className='f-time'>{ this.showDuration() }</div>
          <div className="volume-container">
            <input
              className="volume-bar"
              type='range'
              onChange={this.setVol}
              />
            <div className='volume-icon'><i className="fas fa-volume-up fa-lg"></i></div>
          </div>
        </div>
        <div className="song-info-box">
          <div>
            <img src={this.props.currentSong.artwork_url} className="art-thumb"/>
          </div>
          <div className="song-info">
            <div className='info1'>{this.props.currentSong.title}</div>
            <div className='info2'>{this.props.currentSong.genre}</div>
          </div>
        </div>
      </footer>
    )

  }
}

export default Playbar;
