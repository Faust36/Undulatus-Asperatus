import React from 'react';
import { withRouter } from 'react-router-dom';

class SessionForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillUnmount(){
    this.props.clearErrors()
  }

  update(field){
    return (e) => {
      this.setState({[field]: e.currentTarget.value});
    };
  }

  handleSubmit(e){
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.submitForm(user).then(this.props.closeModal);
  }

  renderErrors(){
    return (
      <ul>
        {this.props.errors.map((error, i)=>{
          return <li key={`error-${i}`}>{error}</li>;
        })}
      </ul>
    );
  }

  render(){
    return (
      <div className="login-form-container">
        <button onClick={this.props.closeModal} className="close-x">X</button>
        <form onSubmit={this.handleSubmit} className="login-form">
          <div className="login-form-header">
              <div><h1>{this.props.formType}</h1></div>
          </div>
          <div className='errors'>{this.renderErrors()}</div>
          <div className="login-form-input">
            <br/>
              <input
                type='text'
                value={this.state.username}
                onChange={this.update('username')}
                className="login-input"
                placeholder="Your Username"
              />
            <br/>
              <input
                type='password'
                value={this.state.password}
                onChange={this.update('password')}
                className= "login-input"
                placeholder="Your Password (At least 6 characters)"
              />
            <br/>
            <button
              className="login-submit"
              type='submit'
              value={this.props.formType}>{this.props.formType}
            </button>
          </div>
        </form>
        <br/>
        <div className='session-form-foot'>
          <h2>or</h2>
          <br/>
          {this.props.otherForm}
        </div>
      </div>
    );
  }
}

export default withRouter(SessionForm);
