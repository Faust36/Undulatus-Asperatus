

export const fetchAllTracks = ()=>{
  return $.ajax({
    url: '/api/tracks',
    method: 'GET'
  });
};

export const fetchTrack = (id) =>{
  return $.ajax({
    url: `/api/tracks/${id}`,
    method: 'GET'
  });
};
export const createTrack = (track) =>{
  return $.ajax({
    url: `/api/tracks`,
    method: 'POST',
    data: {track}
  });
};

export const updateTrack = (track) => {
  return $.ajax({
    url: `/api/tracks/${track.id}`,
    method: 'PATCH',
    data: {track}
  });
};

export const deleteTrack = (id) => {
  return $.ajax({
  url: `/api/tracks/${id}`,
  method:'DELETE'
  });
};
