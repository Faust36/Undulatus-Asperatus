import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import LoginFormContainer from '../session/login_form_container';
import SignupFormContainer from '../session/signup_form_container';
import NewTrackFormContainer from '../tracks/new_track_form_container';
import EditTrackFormContainer from '../tracks/edit_track_form_container';

function Modal({ modal, closeModal }) {
  if(!modal){
    return null;
  }

  // let component;
  // switch(modal){
  //   case 'login':
  //     component = <LoginFormContainer/>;
  //     break;
  //   case 'signup':
  //     component = <SignupFormContainer/>;
  //     break;
  //   case 'upload':
  //     component = <NewTrackFormContainer/>;
  //     break;
  //   case 'edit':
  //     component = <EditTrackFormContainer/>;
  //     break;
  //   default:
  //     return null;
  // }
  return(
      <div className="modal-background" onClick={closeModal}>
        <div className="modal-child" onClick={e => e.stopPropagation()}>
          {modal}
        </div>
      </div>
  )
}

const mapStateToProps = state => {
  return {
    modal: state.ui.modal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal)
