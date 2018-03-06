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

  update(field){
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

  handleSubmit(e){
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.submitForm(user);
  }

  renderErrors(){
    return (
      <ul>
        {this.props.errors.map((error, i)=>{
          return <li key={i}>{error}</li>;
        })}
      </ul>
    );
  }

  render(){
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          Welcome to Undulatus Asperatus!
          <br/>
          Please {this.props.formType} or {this.props.navLink}
          {this.renderErrors()}
          <div>
            <br/>
            <label>Please Enter a Username
              <input
                type='text'
                value={this.state.username}
                onChange={this.update('username')}
              />
            </label>
            <br/>
            <label>Please Enter a Password (At Least 6 Characters!)
              <input
                type='password'
                value={this.state.password}
                onChange={this.update('password')}
              />
            </label>
            <br/>
            <input type='submit' value={this.props.formType}/>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
