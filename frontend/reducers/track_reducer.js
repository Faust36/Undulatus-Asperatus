import {merge} from 'lodash';
import {RECEIVE_CURRENT_USER} from '../actions/session_actions';

const trackReducer = (state={}, action)=>{
  switch(action.type){
    case RECEIVE_CURRENT_USER:
      return merge({}, state, action.tracks)
    default:
      return state
  }
}

export default trackReducer
