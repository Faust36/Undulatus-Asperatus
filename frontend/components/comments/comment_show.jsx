import React from 'react';


function CommentShow(props){

  function commentAuthor(comment){
    if(comment.author_id === props.currentUser.id){
      return "You"
    }else{
      return `${comment.author}`
    }
  }

  function handleDelete(id){
    return () => props.deleteComment(id)
  }

  function commentDelete(comment){
    if(comment.author_id === props.currentUser.id){
      return(
        <div  onClick={handleDelete(comment.id)}className="trash-button">
          <img className="trash-image" src={window.trash}/>
        </div>
      )
    }else{
      return null;
    }
  }

  return(
    props.comments.map((comment) =>{
      return(
        <div key={comment.id} className='comment-display'>
          <img className='comment-image' src={comment.avatar_url}/>
          <div className='comment-info'>
            <div className='comment-author'>{commentAuthor(comment)}</div>
            <div className='comment-body'>{comment.body}</div>
          </div>
          {commentDelete(comment)}
        </div>
      )
    })
  )
}

export default CommentShow
