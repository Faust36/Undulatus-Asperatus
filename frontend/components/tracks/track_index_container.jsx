import { connect } from 'react-redux';
import {fetchAllTracks} from '../../actions/track_actions';
import TrackIndex from './track_index';
import {addSong, receiveCurrentSong} from '../../actions/playlist_actions';
const mapStateToProps = (state) =>{
  return {
    tracks: Object.values(state.entities.tracks)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllTracks: () => dispatch(fetchAllTracks()),
    addSong: (track)=> dispatch(addSong(track)),
    receiveCurrentSong: (track) => dispatch(receiveCurrentSong(track))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TrackIndex);
