import { connect } from 'react-redux';
import {fetchAllTracks} from '../../actions/track_actions';
import TrackIndex from './track_index';

const mapStateToProps = (state) =>{
  return {
    tracks: Object.values(state.entities.tracks)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllTracks: () => dispatch(fetchAllTracks()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TrackIndex);
