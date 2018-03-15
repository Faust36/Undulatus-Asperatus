import {connect} from 'react-redux';
import { updateTrack } from '../../actions/track_actions';
import TrackForm from './track_form';
import { clearErrors } from '../../actions/errors_actions';
import { closeModal } from '../../actions/modal_actions';

const mapStateToProps = (state, ownProps) =>{
  const track = state.entities.tracks[ownProps.trackId] || null
  const errors = state.errors.tracks
  return {
    formType: 'Edit This Track',
    track,
    errors
  }
}

const mapDispatchToProps = (dispatch) =>{
  return{
    submitForm: (formData) => dispatch(updateTrack(formData)),
    clearErrors: () => dispatch(clearErrors()),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TrackForm);
