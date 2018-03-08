import {combineReducers} from 'redux';
import sessionErrorsReducer from './session_errors_reducer';
import trackErrorsReducer from './track_errors_reducer';

const errorsReducer = combineReducers({
  tracks: trackErrorsReducer,
  session: sessionErrorsReducer
});

export default errorsReducer;
