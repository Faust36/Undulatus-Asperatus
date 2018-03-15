import React from 'react';
import {withRouter} from 'react-router-dom';

class TrackForm extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      id: this.props.track? this.props.track.id : undefined,
      title: this.props.track ? this.props.track.title : '',
      genre: this.props.track ? this.props.track.genre : '',
      imageUrl: this.props.track ? this.props.track.artwork_url : null,
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateSongFile = this.updateSongFile.bind(this);
    this.updateImageFile = this.updateImageFile.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    var formData = new FormData();
    formData.append("track[title]", this.state.title)
    formData.append("track[genre]", this.state.genre)
    if(this.state.imageFile){
      formData.append("track[artwork]", this.state.imageFile)
    }
    if(this.state.songFile){
      formData.append("track[song]", this.state.songFile)
    }
    this.props.submitForm({formData, id:this.state.id}).then(this.props.closeModal)
  }

  update(field){
    return (e)=> this.setState({[field]: e.target.value})
  }

  updateImageFile(e){
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () =>{
      this.setState({imageFile: file, imageUrl: fileReader.result});
    }

    if(file){
      fileReader.readAsDataURL(file);
    }
  }

  updateSongFile(e){
    const song = e.currentTarget.files[0];
    this.setState({songFile: song})
  }

  componentWillUnmount(){
    this.props.clearErrors()
  }

  errors(){
    if(this.props.errors){
      return(
        this.props.errors.map((error, idx)=>{
          return (<li key={idx}>{error}</li>)
        })
      )
    }
  }
  filename(){
    if(this.state.songFile){
      return(
        <div>{this.state.songFile.name}</div>
      )
    }
  }

  render(){
    return(
    <div className="track-form-container">
      <button onClick={this.props.closeModal} className="close-x">X</button>
      <h2 className='track-form-header'>{this.props.formType}</h2>
      <br/>
      {this.errors()}
      <form className="track-form" onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.title}
          placeholder="Title"
          onChange={this.update('title')}
          className="track-form-input"
        />
        <br/>
        <input
          type="text"
          value={this.state.genre}
          placeholder="Genre"
          onChange={this.update('genre')}
          className="track-form-input"
        />
        <br/>
        <label className="song-upload" htmlFor='songFile'>Choose a File to Upload</label>
        <input
          id="songFile"
          type='file'
          onChange={this.updateSongFile}
          style={{display:'none'}}
        />
        <br/>
          {this.filename()}
        <br/>
        <label className="image-upload" htmlFor='imageFile'>Choose An Image</label>
        <input
          id='imageFile'
          type='file'
          onChange={this.updateImageFile}
          style={{display:'none'}}
        />
        <br/>
        <img src={this.state.imageUrl} className="track-form-artwork"/>
        <br/>
        <div className='track-buttons'>
          <button
            type='button'
            onClick={this.props.closeModal}
            className='track-form-cancel'
          > Cancel </button>
          <button
            type='submit'
            className='track-form-submit'
          > Save </button>
        </div>
      </form>
    </div>
    )
  }
}

export default withRouter(TrackForm);
