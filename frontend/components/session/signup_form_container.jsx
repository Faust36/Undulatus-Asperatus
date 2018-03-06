import { signup } from '../../actions/session_actions';
import { connect } from 'react-redux';
import React from 'react';
import SessionForm from './session_form';
import { Link } from 'react-router-dom';

const mapStateToProps = ({errors})=>{
  return {
    errors: errors.session,
    formType: 'Create Account',
    navLink: <Link to='/login'>Sign In</Link>
  }
}


const mapDispatchToProps = (dispatch) =>{
  return {
    submitForm: (user) => dispatch(signup(user))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
