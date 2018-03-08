import * as UserApiUtil from '../util/user_api_util';
export const RECEIVE_ALL_USERS = 'RECEIVE_ALL_USERS';
export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_USER_ERRORS = 'RECEIVE_USER_ERRORS';

export const receiveUsers = (users) =>{
  return {
    type: RECEIVE_ALL_USERS,
    users
  };
};

export const receiveUser = ({user, tracks}) =>{
  return {
    type: RECEIVE_USER,
    user,
    tracks
  };
};

export const fetchUsers = ()=> (dispatch)=>{
  return UserApiUtil.fetchUsers().then((users)=>{
    return dispatch(receiveUsers(users));
  });
};

export const fetchUser = (id) => (dispatch) =>{
  return UserApiUtil.fetchUser(id).then((payload)=>{
    return dispatch(receiveUser(payload));
  });
};
