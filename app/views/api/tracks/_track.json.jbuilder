json.extract! track, :id, :title, :genre, :artist_id
json.artwork_url asset_path(track.artwork.url)
json.song_url asset_path(track.song.url)
json.commentIds track.comment_ids || []
