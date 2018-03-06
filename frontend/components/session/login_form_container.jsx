import { login } from '../../actions/session_actions';
import { connect } from 'react-redux';
import React from 'react';
import SessionForm from './session_form';
import { Link } from 'react-router-dom';

const mapStateToProps = ({errors})=>{
  return {
    errors: errors.session,
    formType: 'Sign In',
    navLink: <Link to='/signup'>Create Account</Link>
  }
}


const mapDispatchToProps = (dispatch) =>{
  return {
    submitForm: (user) => dispatch(login(user))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
