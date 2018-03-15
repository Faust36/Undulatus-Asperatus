import {merge} from 'lodash';
import {RECEIVE_ALL_USERS, RECEIVE_USER} from '../actions/user_actions';
import {RECEIVE_CURRENT_USER} from '../actions/session_actions';
import { RECEIVE_TRACK, CREATE_TRACK, REMOVE_TRACK } from '../actions/track_actions';

const userReducer = (state={}, action) =>{
  switch(action.type){
    case RECEIVE_ALL_USERS:
      return merge({}, state, action.users);
    case RECEIVE_USER:
    case RECEIVE_TRACK:
      return merge({}, state, {[action.user.id]:action.user});
    case RECEIVE_CURRENT_USER:
      return merge({}, state, {[action.user.id]: action.user});
    case CREATE_TRACK:
      let newUser = state[action.track.artist_id]
      newUser.trackIds.push(action.track.id)
      return merge({}, state, {[newUser.id]: newUser} )
    case REMOVE_TRACK:
      let neoUser = state[action.track.artist_id]
      let index = neoUser.trackIds.indexOf(action.track.id)
      neoUser.trackIds.splice(index,1)
      return merge({}, state, {[neoUser.id]: neoUser})
    default:
      return state;
  }
};

export default userReducer;
