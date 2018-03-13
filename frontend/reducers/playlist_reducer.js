import {
  RECEIVE_CURRENT_SONG,
  CLEAR_PLAYLIST,
  REMOVE_FIRST_SONG,
  ADD_SONG} from '../actions/playlist_actions';

  const PlaylistReducer = (state = [], action) =>{
    Object.freeze(state)
    switch(action.type){
      case RECEIVE_CURRENT_SONG:
        let newState = state.slice();
        newState.unshift(action.track)
        return newState;
      case REMOVE_FIRST_SONG:
        let neoState = state.slice();
        neoState.shift()
        return neoState;
      case CLEAR_PLAYLIST:
        return [];
      default:
        return state;
    }
  }

export default PlaylistReducer
