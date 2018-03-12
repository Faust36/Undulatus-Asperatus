import {connect} from 'react-redux';
import { createTrack } from '../../actions/track_actions';
import TrackForm from './track_form';
import { clearErrors } from '../../actions/errors_actions';
import { closeModal } from '../../actions/modal_actions';

const mapStateToProps = (state) => {

  return {
    errors: state.errors.tracks
  };
};

const mapDispatchToProps = (dispatch) =>{
  return{
    submitForm: (formData) => dispatch(createTrack(formData)),
    clearErrors: () => dispatch(clearErrors()),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TrackForm);
