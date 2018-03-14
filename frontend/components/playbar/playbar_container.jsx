import { connect } from 'react-redux';
import Playbar from './playbar_show';
import {
  receiveCurrentSong,
  addSong,
  clearPlaylist,
  removeCurrentSong,
  removeFirstSong,
  play,
  pause} from '../../actions/playlist_actions';


const mapStateToProps = (state) =>{
  const currentSong = state.ui.currentSong 
  const playlist = state.ui.playlist || [];
  const isPlaying = state.ui.isPlaying
  return {
    currentSong,
    playlist,
    isPlaying
  }
}

const mapDispatchToProps = (dispatch) =>{
  return{
    receiveCurrentSong: (track) => dispatch(receiveCurrentSong(track)),
    addSong: (track) => dispatch(addSong(track)),
    clearPlaylist: () => dispatch(clearPlaylist()),
    removeCurrentSong: () => dispatch(removeCurrentSong()),
    removeFirstSong: () => dispatch(removeFirstSong()),
    play: () => dispatch(play()),
    pause: () => dispatch(pause())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Playbar);
