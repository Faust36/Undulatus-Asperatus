import {connect} from 'react-redux';
import { fetchTrack, deleteTrack } from '../../actions/track_actions';
import Track from './track_show';

const mapStateToProps =(state, ownProps) =>{
  const track = state.entities.tracks[ownProps.match.params.trackId] || {};
  const artist = state.entities.users[track.artist_id] || {};
  const currentUser = state.entities.users[state.entities.currentUser] || {};
  return{
    track,
    currentUser,
    artist
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchTrack: (id) => dispatch(fetchTrack(id)),
    deleteTrack: (id) => dispatch(deleteTrack(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Track);
