import {combineReducers} from 'redux';
import users from './user_reducer';
import tracks from './track_reducer';
import comments from './comment_reducer';

const entitiesReducer = combineReducers({
  users,
  tracks,
  comments 
});

export default entitiesReducer;
