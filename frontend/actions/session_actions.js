export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const RECEIVE_NULL_USER = 'RECEIVE_NULL_USER';
import * as SessionApiUtil from '../util/session_api_util';

export const receiveCurrentUser = ({user, tracks}) =>{
  return {
    type: RECEIVE_CURRENT_USER,
    user,
    tracks
  };
};

export const receiveErrors = errors => {
  return {
    type: RECEIVE_SESSION_ERRORS,
    errors
  };
};

export const receiveNullUser = () =>{
  return{
    type: RECEIVE_NULL_USER
  }
}

export const login = (user) => (dispatch) => {
  return SessionApiUtil.login(user).then(
    (payload) => (dispatch(receiveCurrentUser(payload))),
    (err) => (dispatch(receiveErrors(err.responseJSON))));
};

export const signup = (user) => (dispatch) => {
  return SessionApiUtil.signup(user).then(
    (payload) => (dispatch(receiveCurrentUser(payload))),
    (err) => (dispatch(receiveErrors(err.responseJSON)))
  );
};

export const logout = () => (dispatch) => {
  return SessionApiUtil.logout().then(()=>{
    return dispatch(receiveNullUser());
  });
};
