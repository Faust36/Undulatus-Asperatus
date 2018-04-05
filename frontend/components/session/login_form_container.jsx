import { login } from '../../actions/session_actions';
import { connect } from 'react-redux';
import React from 'react';
import SessionForm from './session_form';
import { openModal, closeModal } from '../../actions/modal_actions';
import { clearErrors } from '../../actions/errors_actions';
import SignupFormContainer from './signup_form_container';

const mapStateToProps = ({errors})=>{
  return {
    errors: errors.session,
    formType: 'Login',
  }
}


const mapDispatchToProps = (dispatch) =>{
  return {
    submitForm: (user) => dispatch(login(user)),
    clearErrors: () => dispatch(clearErrors()),
    otherForm: (
      <button className="other-form" onClick={() => dispatch(openModal(<SignupFormContainer/>))}>
        Signup
      </button>
    ),
    closeModal: () => dispatch(closeModal())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
