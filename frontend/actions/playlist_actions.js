export const RECEIVE_CURRENT_SONG = 'RECEIVE_CURRENT_SONG';
export const CLEAR_PLAYLIST = 'CLEAR_PLAYLIST';
export const ADD_SONG = 'ADD_SONG';

export const receiveCurrentSong = (track) =>{
  return {
    type: RECEIVE_CURRENT_SONG,
    track
  }
}

export const addSong = (track) =>{
  return{
    type: ADD_SONG,
    track
  }
}

export const clearPlaylist = () =>{
  return{
    type: CLEAR_PLAYLIST,
  }
}
