import { combineReducers } from 'redux';
import modalReducer from './modal_reducer';
import CurrentSongReducer from './current_song_reducer';
import PlaylistReducer from './playlist_reducer';

const uiReducer = combineReducers({
  modal: modalReducer,
  currentSong: CurrentSongReducer,
  playlist: PlaylistReducer
});

export default uiReducer;
