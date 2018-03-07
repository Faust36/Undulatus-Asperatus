import {combineReducers} from 'redux';
import users from './user_reducer';
import tracks from './track_reducer';

const entitiesReducer = combineReducers({
  users,
  tracks
});

export default entitiesReducer;
