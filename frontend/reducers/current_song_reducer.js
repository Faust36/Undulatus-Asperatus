import {RECEIVE_CURRENT_SONG,ADD_SONG, CLEAR_PLAYLIST} from '../actions/playlist_actions';

const CurrentSongReducer = (state= null, action) =>{
  Object.freeze(state)
  switch(action.type){
    case RECEIVE_CURRENT_SONG:
    case ADD_SONG:
      return action.track;
    case CLEAR_PLAYLIST:
      return null;
    default:
      return state;
  }
}


export default CurrentSongReducer;
