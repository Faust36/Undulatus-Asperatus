# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Track.destroy_all

a = User.create(username: "User1", password: 'password', city: Faker::StarWars.planet, country: Faker::StarWars.planet, bio: Faker::Lovecraft.deity, first_name: Faker::StarWars.character)
b = User.create(username: "User2", password: 'starwars', city: Faker::StarWars.planet, country: Faker::StarWars.planet, bio: Faker::Lovecraft.deity, first_name: Faker::StarWars.character)


10.times do
  t = Track.new
  t.title = Faker::Space.star_cluster
  t.genre = Faker::Hipster.word
  t.artist_id = User.all.sample.id
  t.save
end
