json.track do
  json.partial! 'api/tracks/track', track: @track
end
json.user do
  json.extract! @track.artist, :id, :username, :city, :country, :bio, :first_name, :last_name
  json.avatar_url asset_path(@track.artist.avatar.url)
  json.banner_url asset_path(@track.artist.banner.url)
  json.trackIds @track.artist.track_ids
end
if @track.comments
  json.comments do
    @track.comments.each do |comment|
      json.set! comment.id do
        json.extract! comment, :id, :body, :author_id, :track_id
        json.avatar_url asset_path(comment.author.avatar.url)
        json.author comment.author.username
      end
    end
  end
end
