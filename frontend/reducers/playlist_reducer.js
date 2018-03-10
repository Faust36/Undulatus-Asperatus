import {
  RECEIVE_CURRENT_SONG,
  CLEAR_PLAYLIST,
  ADD_SONG} from '../actions/playlist_actions';

  const PlaylistReducer = (state = [], action) =>{
    Object.freeze(state)
    switch(action.type){
      case ADD_SONG:
        let newState = state.slice();
        newState.unshift(action.track)
        return newState;
      case CLEAR_PLAYLIST:
        return [];
      default:
        return state;
    }
  }

export default PlaylistReducer
