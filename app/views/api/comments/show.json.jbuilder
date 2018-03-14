json.extract! @comment, :id, :body, :author_id, :track_id
json.avatar_url asset_path(@comment.author.avatar.url)
json.author @comment.author.username
