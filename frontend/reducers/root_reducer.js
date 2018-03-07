import {combineReducers} from 'redux';
import session from './session_reducer';
import errors from './errors_reducer';
import entities from './entities_reducer';
import ui from './ui_reducer';

const RootReducer = combineReducers({
  entities,
  session,
  ui,
  errors
});

export default RootReducer;
