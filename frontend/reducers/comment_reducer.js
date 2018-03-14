import {merge} from 'lodash';
import {RECEIVE_COMMENT, REMOVE_COMMENT} from '../actions/comment_actions';
import {RECEIVE_TRACK} from '../actions/track_actions';

const commentReducer = (state={}, action) =>{
  switch(action.type){
    case RECEIVE_COMMENT:
      return merge({}, state, {[action.comment.id]: action.comment});
    case RECEIVE_TRACK:
      return merge({}, state, action.comments)
    case REMOVE_COMMENT:
      let newState = merge({}, state)
      delete newState[action.comment.id]
      return newState
    default:
      return state;
  }
}

export default commentReducer
