import {PLAY, PAUSE, RECEIVE_CURRENT_SONG, REMOVE_CURRENT_SONG} from '../actions/playlist_actions';

const playingReducer = (state = false, action)=>{
  switch(action.type){
    case PLAY:
    case RECEIVE_CURRENT_SONG:
      return true
    case PAUSE:
    case REMOVE_CURRENT_SONG:
      return false
    default:
      return state
  }
}

export default playingReducer;
