import React from 'react';
import { Link } from 'react-router-dom';
import CommentShow from '../comments/comment_show';
import CommentForm from '../comments/comment_form';
import EditTrackFormContainer from './edit_track_form_container';


class Track extends React.Component {
  constructor(props){
    super(props)
    this.handleEdit = this.handleEdit.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
    this.ownerButtons = this.ownerButtons.bind(this)
  }

  componentDidMount(){
    this.props.fetchTrack(this.props.match.params.trackId);
  }

  componentWillReceiveProps(nextProps){
    if(this.props.match.params.trackId !== nextProps.match.params.trackId){
      this.props.fetchTrack(nextProps.match.params.trackId);
    }
  }

  handleEdit(){
    this.props.openModal(<EditTrackFormContainer  trackId={this.props.track.id}/>)
  }

  handleDelete(){
    this.props.deleteTrack(this.props.track.id)
    this.props.history.push(`/users/${this.props.currentUser.id}`)
  }

  ownerButtons(){
    if(this.props.artist.id === this.props.currentUser.id){
      return(
        <div>
          <div className="edit-button nav-button-orange" onClick={() => {this.props.openModal(<EditTrackFormContainer  trackId={this.props.track.id}/>)}}>Edit</div>
          <div className="delete-button nav-button-orange" onClick={this.handleDelete}>Delete</div>
        </div>
      )
    }else{
      return null;
    }
  }




  render(){
    if(!this.props.track){
      return null;
    }
    return(
      <div className="track-body">
        <div className="track-banner">
          <img className="track-art"src={this.props.track.artwork_url}/>
          <h3 className="track-genre">#{this.props.track.genre}</h3>
        </div>
        <div className='main-left-top'>
          <CommentForm
            track={this.props.track}
            currentUser={this.props.currentUser}
            createComment={this.props.createComment}
            />
        </div>
        <div className="main-container-left">
          <div className="track-body-artist">
            <Link to={`/users/${this.props.artist.id}`} style={{textDecoration:'none', color:'black'}}>
              <img className="artist-port" src={this.props.artist.avatar_url}/>
              <h4 className="artist-name">{this.props.artist.username}</h4>
            </Link>
            {this.ownerButtons()}
          </div>
          <div className='comment-list-container'>
            <div className="comment-list-header">
              <h4 >{this.props.comments.length} comments</h4>
            </div>
            <div className="comment-list">
              <CommentShow
                comments={this.props.comments}
                currentUser={this.props.currentUser}
                deleteComment={this.props.deleteComment}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Track;
