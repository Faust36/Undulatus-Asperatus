import React from 'react';


class Playbar extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      currentSong: this.props.currentSong
    }
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
      this.setState({currentSong:nextProps.currentSong})
    }
  }
  // shouldComponentUpdate(nextProps, nextState){
  //   debugger
  //   return this.props.currentSong !== nextProps.currentSong
  // }

  render(){
    if(!this.state.currentSong){
      return null
    }
    const song = <audio src={this.state.currentSong.song_url} controls autoPlay/>
    return(
      <footer className="main-footer">
        {song}
      </footer>
    )

  }
}

export default Playbar;
