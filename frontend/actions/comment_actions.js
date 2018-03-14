import * as CommentApiUtil from '../util/comment_api_util';
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const RECEIVE_COMMENT_ERRORS = 'RECEIVE_COMMENT_ERRORS';

export const receiveComment = (comment) =>{
  return{
    type: RECEIVE_COMMENT,
    comment
  }
}

export const removeComment = (comment) =>{
  return {
    type: REMOVE_COMMENT,
    comment
  }
}

export const receiveCommentErrors = (errors) =>{
  return{
    type: RECEIVE_COMMENT_ERRORS,
    errors
  }
}

export const createComment = (comment) => (dispatch) =>{
  return CommentApiUtil.createComment(comment).then(
    (comment) => {return dispatch(receiveComment(comment))},
    (err) => dispatch(receiveCommentErrors(err.responseJSON))
  );
}

export const deleteComment = (id) => (dispatch) => {
  return CommentApiUtil.deleteComment(id).then(
    (comment) => dispatch(removeComment(comment)),
    (err) => dispatch(receiveCommentErrors(err.responseJSON))
  );
};
