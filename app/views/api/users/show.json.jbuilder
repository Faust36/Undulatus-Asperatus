json.user do
  json.extract! @user, :id, :username, :city, :country, :bio, :first_name, :last_name
  # json.banner_url asset_path(@user.banner_url)
  # json.thumbnail_url asset_path(@user.thumbnail_url)
  json.trackIds @user.track_ids
end
json.tracks do
  @user.tracks.each do |track|
    json.set! track.id do
      json.partial! 'api/tracks/track', track: track
    end
  end
end
