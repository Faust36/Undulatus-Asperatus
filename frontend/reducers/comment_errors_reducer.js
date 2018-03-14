import {
  RECEIVE_COMMENT,
  REMOVE_COMMENT,
  RECEIVE_COMMENT_ERRORS} from '../actions/comment_actions';
import {RECEIVE_TRACK} from '../actions/track_actions';

const commentErrorsReducer = (state = [], action)=>{
  switch(action.type){
    case RECEIVE_COMMENT_ERRORS:
      return [action.errors]
    case RECEIVE_COMMENT:
    case REMOVE_COMMENT:
    case RECEIVE_TRACK:
      return [];
    default:
      return state;
  }
}

export default commentErrorsReducer;
