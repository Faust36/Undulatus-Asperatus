import { connect } from 'react-redux';
import Playbar from './playbar_show';
import {
  receiveCurrentSong,
  addSong,
  clearPlaylist,
  removeCurrentSong,
  removeFirstSong} from '../../actions/playlist_actions';


const mapStateToProps = (state) =>{
  const currentSong = state.ui.playlist[0] ? state.ui.playlist[0] : null;
  const playlist = state.ui.playlist || [];
  return {
    currentSong,
    playlist
  }
}

const mapDispatchToProps = (dispatch) =>{
  return{
    receiveCurrentSong: (track) => dispatch(receiveCurrentSong(track)),
    addSong: (track) => dispatch(addSong(track)),
    clearPlaylist: () => dispatch(clearPlaylist()),
    removeCurrentSong: () => dispatch(removeCurrentSong()),
    removeFirstSong: () => dispatch(removeFirstSong())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Playbar);
