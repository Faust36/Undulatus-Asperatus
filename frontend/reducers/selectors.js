export const selectUserTracks = (state, user) => {
  return user.trackIds ? user.trackIds.map(id => state.entities.tracks[id]) : [];
};

export const selectTrackComments = (state, track) =>{
  return track.commentIds ? track.commentIds.map(id => state.entities.comments[id]) : [];
}
