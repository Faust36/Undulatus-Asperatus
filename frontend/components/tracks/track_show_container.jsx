import {connect} from 'react-redux';
import { fetchTrack, deleteTrack } from '../../actions/track_actions';
import Track from './track_show';
import {createComment, deleteComment} from '../../actions/comment_actions';
import {selectTrackComments} from '../../reducers/selectors';

const mapStateToProps =(state, ownProps) =>{
  const track = state.entities.tracks[ownProps.match.params.trackId] || {};
  const artist = state.entities.users[track.artist_id] || {};
  const currentUser = state.entities.users[state.session.currentUser] || {};
  const comments = selectTrackComments(state, track);
  return{
    track,
    currentUser,
    artist,
    comments
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchTrack: (id) => dispatch(fetchTrack(id)),
    deleteTrack: (id) => dispatch(deleteTrack(id)),
    createComment: (comment) => dispatch(createComment(comment)),
    deleteComment: (id) => dispatch(deleteComment(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Track);
