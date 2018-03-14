json.extract! user, :id, :username, :city, :country, :bio, :first_name, :last_name
json.avatar_url asset_path(user.avatar.url())
json.banner_url asset_path(user.banner.url())
