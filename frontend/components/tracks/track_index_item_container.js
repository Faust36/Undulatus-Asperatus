import {addSong, receiveCurrentSong, play, pause} from '../../actions/playlist_actions';
import TrackIndexItem from './track_index_item';
import {connect} from 'react-redux';

const mapStateToProps = (state) =>{
  const currentSong = state.ui.currentSong
  const isPlaying = state.ui.isPlaying
  return {
    currentSong,
    isPlaying
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    addSong: (track)=> dispatch(addSong(track)),
    receiveCurrentSong: (track) => dispatch(receiveCurrentSong(track)),
    play: ()=> dispatch(play()),
    pause: () => dispatch(pause())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(TrackIndexItem);
