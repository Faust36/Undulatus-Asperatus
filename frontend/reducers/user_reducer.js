import {merge} from 'lodash';
import {RECEIVE_ALL_USERS, RECEIVE_USER} from '../actions/user_actions';

const userReducer = (state={}, action) =>{
  switch(action.type){
    case RECEIVE_ALL_USERS:
      return merge({}, state, action.users);
    case RECEIVE_USER:
      return merge({}, state, {[action.user.id]:action.user});
    default:
      return state;
  }
};

export default userReducer;
