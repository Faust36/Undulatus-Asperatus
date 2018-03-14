import React from 'react';


class CommentForm extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      body: '',
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  update(field){
    return (e) => this.setState({[field]:e.target.value})
  }

  handleSubmit(e){
    e.preventDefault();
    return this.props.createComment({body: this.state.body, track_id: this.props.track.id}).then(()=>{
      return this.setState({body: ''})
    })
  }

  render(){
    if (this.props.currentUser.id) {
      return(
        <div className='comment-form-box'>
          <img className='comment-form-img' src={this.props.currentUser.avatar_url}/>
          <form className='comment-form'  onSubmit={this.handleSubmit}>
            <input
              className="comment-form-input"
              type='text'
              placeholder='Write a comment'
              onChange={this.update('body')}
              value={this.state.body}
            />
          </form>
        </div>
      )
    }else{
      return null;
    }
  }
}

export default CommentForm;
