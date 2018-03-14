import { combineReducers } from 'redux';
import modalReducer from './modal_reducer';
import CurrentSongReducer from './current_song_reducer';
import PlaylistReducer from './playlist_reducer';
import playingReducer from './playing_reducer';

const uiReducer = combineReducers({
  modal: modalReducer,
  playlist: PlaylistReducer,
  currentSong: CurrentSongReducer,
  isPlaying: playingReducer
});

export default uiReducer;
