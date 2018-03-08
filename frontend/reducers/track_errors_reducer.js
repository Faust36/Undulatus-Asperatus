import {merge} from 'lodash';
import {
  RECEIVE_ALL_TRACKS,
  RECEIVE_TRACK,
  REMOVE_TRACK,
  RECEIVE_TRACK_ERRORS
} from '../actions/track_actions';

const trackErrorsReducer = (state = [], action) =>{
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_ALL_TRACKS:
    case RECEIVE_TRACK:
    case REMOVE_TRACK:
      return [];
    case RECEIVE_TRACK_ERRORS:
      return action.errors;
    default:
      return state;
  }
};

export default trackErrorsReducer;
