import {RECEIVE_CURRENT_SONG,ADD_SONG, CLEAR_PLAYLIST, REMOVE_CURRENT_SONG} from '../actions/playlist_actions';

const CurrentSongReducer = (state= null, action) =>{
  Object.freeze(state)
  switch(action.type){
    case RECEIVE_CURRENT_SONG:
      return action.track
    case CLEAR_PLAYLIST:
    case REMOVE_CURRENT_SONG:
      return null;
    default:
      return state;
  }
}


export default CurrentSongReducer;
