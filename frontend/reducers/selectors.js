export const selectUserTracks = (state, user) => {
  return user.trackIds ? user.trackIds.map(id => state.entities.tracks[id]) : [];
};
