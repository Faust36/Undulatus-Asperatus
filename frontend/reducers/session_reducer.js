import {merge} from 'lodash';
import {RECEIVE_CURRENT_USER, RECEIVE_NULL_USER} from '../actions/session_actions';

const _nullUser = Object.freeze({currentUser: null});

const sessionReducer = (state = _nullUser, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_CURRENT_USER:
      return merge({}, {currentUser:action.user.id});
    case RECEIVE_NULL_USER:
      return _nullUser;
    default:
      return state;
  }
};

export default sessionReducer;
