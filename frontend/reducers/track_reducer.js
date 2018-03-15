import {merge} from 'lodash';
import {RECEIVE_CURRENT_USER} from '../actions/session_actions';
import {RECEIVE_USER} from '../actions/user_actions';
import {
  RECEIVE_ALL_TRACKS,
  RECEIVE_TRACK,
  REMOVE_TRACK,
  CREATE_TRACK
} from '../actions/track_actions';
import{RECEIVE_COMMENT, REMOVE_COMMENT} from '../actions/comment_actions';


const trackReducer = (state={}, action)=>{
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_CURRENT_USER:
    case RECEIVE_USER:
      return merge({}, state, action.tracks);
    case RECEIVE_ALL_TRACKS:
      return merge({}, state, action.tracks);
    case RECEIVE_TRACK:
    case CREATE_TRACK:
      return merge({}, state, {[action.track.id]: action.track});
    case REMOVE_TRACK:
      let newState = merge({}, state);
      delete newState[action.track.id];
      return newState;
    case RECEIVE_COMMENT:
      let newTrack = state[action.comment.track_id]
      newTrack.commentIds.push(action.comment.id)
      return merge({}, state, {[newTrack.id]: newTrack} )
    case REMOVE_COMMENT:
      let neoTrack = state[action.comment.track_id]
      let index = neoTrack.commentIds.indexOf(action.comment.id)
      neoTrack.commentIds.splice(index,1)
      return merge({}, state, {[neoTrack.id]: neoTrack})
    default:
      return state;
  }
};

export default trackReducer;
