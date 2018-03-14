import * as TrackApiUtil from '../util/track_api_util';
export const RECEIVE_ALL_TRACKS = 'RECEIVE_ALL_TRACKS';
export const RECEIVE_TRACK = 'RECEIVE_TRACK';
export const REMOVE_TRACK = 'REMOVE_TRACK';
export const RECEIVE_TRACK_ERRORS = 'RECEIVE_TRACK_ERRORS';
export const CREATE_TRACK = 'CREATE_TRACK';

export const receiveAllTracks = (tracks) =>{
  return {
    type: RECEIVE_ALL_TRACKS,
    tracks
  };
};

export const newTrack = ({track, user, comments}) =>{
  return{
    type: CREATE_TRACK,
    track,
    user,
    comments
  }
}

export const receiveTrack = ({track, user, comments}) => {
  return {
    type: RECEIVE_TRACK,
    track,
    user,
    comments
  };
};

export const removeTrack = ({id}) => {
  return{
    type: REMOVE_TRACK,
    trackId: id
  };
};

export const receiveTrackErrors = (errors) => {
  return {
    type: RECEIVE_TRACK_ERRORS,
    errors
  };
};

export const fetchAllTracks = () => (dispatch) => {
  return TrackApiUtil.fetchAllTracks().then(
    (tracks) => dispatch(receiveAllTracks(tracks)),
    (err) => dispatch(receiveTrackErrors(err.responseJSON))
  );
};

export const fetchTrack = (id) => (dispatch) => {
  return TrackApiUtil.fetchTrack(id).then(
    (payload) => dispatch(receiveTrack(payload)),
    (err) => dispatch(receiveTrackErrors(err.responseJSON))
  );
};

export const createTrack = (formData) => (dispatch) => {
  return TrackApiUtil.createTrack(formData).then(
    (payload) => dispatch(newTrack(payload)),
    (err) => dispatch(receiveTrackErrors(err.responseJSON))
  );
};

export const updateTrack = (track) => (dispatch) => {
  return TrackApiUtil.createTrack(track).then(
    (track) => dispatch(receiveTrack(track)),
    (err) => dispatch(receiveTrackErrors(err.responseJSON))
  );
};

export const deleteTrack = (id) => (dispatch) => {
  return TrackApiUtil.deleteTrack(id).then(
    (track) => dispatch(removeTrack(track)),
    (err) => dispatch(receiveTrackErrors(err.responseJSON))
  );
};
