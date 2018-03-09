json.extract! track, :id, :title, :genre, :artist_id
json.artwork_url asset_path(track.artwork.url())
