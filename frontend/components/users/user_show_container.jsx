import { connect } from 'react-redux';
import User from './user_show';
import {selectUserTracks} from '../../reducers/selectors';
import { fetchUser } from '../../actions/user_actions';

const mapStateToProps = (state, ownProps) =>{
  const user = state.entities.users[ownProps.match.params.userId] || {};
  const tracks = selectUserTracks(state, user);
  const currentUser = state.session.currentUser || null;
  return {user, tracks, currentUser};
};

const mapDispatchToProps = ( dispatch ) => {
  return{
    fetchUser: (id) => dispatch(fetchUser(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(User);
