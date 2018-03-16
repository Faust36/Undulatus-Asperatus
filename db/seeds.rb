# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Track.destroy_all

bach = User.new()
bach.username = "FugueState"
bach.password = "jsbach"
bach.avatar = "https://s3.amazonaws.com/asperatus-seed/bach.jpg"
bach.banner = "https://s3.amazonaws.com/asperatus-seed/bach_background.jpg"
bach.save!

track1 = bach.tracks.new({
  title: 'Toccata and Fugue',
  genre: 'Fugue'
  })
track1.artwork =  "https://s3.amazonaws.com/asperatus-seed/bach_music_4.jpg"
track1.song =  "https://s3.amazonaws.com/asperatus-seed/Toccata-and-Fugue-Dm.mp3"
track1.save!

track2 = bach.tracks.new({
  title: 'Book 1 Fugue 10',
  genre: 'Fugue'
  })
track2.artwork = "https://s3.amazonaws.com/asperatus-seed/bach_music_1.jpg"
track2.song = "https://s3.amazonaws.com/asperatus-seed/book1-fugue10.mp3"
track2.save!

track3 = bach.tracks.new({
  title: 'Book 1 Prelude 2',
  genre: 'Fugue'
  })
track3.artwork = "https://s3.amazonaws.com/asperatus-seed/bach_music_2.jpg"
track3.song = "https://s3.amazonaws.com/asperatus-seed/book1-prelude02-el.mp3"
track3.save!

track4 = bach.tracks.new({
  title: 'Book 1 Fugue 24',
  genre: 'Fugue'
  })
track4.artwork = "https://s3.amazonaws.com/asperatus-seed/bach_music_3.jpg"
track4.song = "https://s3.amazonaws.com/asperatus-seed/book1-fugue24-string-quartet.mp3"
track4.save!

beet = User.new()
beet.username = "LudwigVonBeats"
beet.password = "furelise"
beet.avatar = "https://s3.amazonaws.com/asperatus-seed/beethoven.jpg"
beet.banner = "https://s3.amazonaws.com/asperatus-seed/beethoven_banner.jpg"
beet.save!

track5 = beet.tracks.new({
  title: 'Fur Elise',
  genre: 'Romantic/Classical'
  })
track5.artwork =  "https://s3.amazonaws.com/asperatus-seed/elise.jpg"
track5.song =  "https://s3.amazonaws.com/asperatus-seed/fur-elise.mp3"
track5.save!

track6 = beet.tracks.new({
  title: 'Symphony #5',
  genre: 'Romantic/Classical'
  })
track6.artwork =  "https://s3.amazonaws.com/asperatus-seed/solarpunk.png"
track6.song =  "https://s3.amazonaws.com/asperatus-seed/Beethoven-Symphony5-1.mp3"
track6.save!

track7 = beet.tracks.new({
  title: 'Moonlight Guitar',
  genre: 'Romantic/Classical'
  })
track7.artwork =  "https://s3.amazonaws.com/asperatus-seed/beethoven_moonlight.jpg"
track7.song =  "https://s3.amazonaws.com/asperatus-seed/beethoven-tarrega-moonlight-sonata1-guitar.mp3"
track7.save!

track8 = beet.tracks.new({
  title: 'Moonlight Sonata ',
  genre: 'Romantic/Classical'
  })
track8.artwork =  "https://s3.amazonaws.com/asperatus-seed/beethoven_moon.jpg"
track8.song =  "https://s3.amazonaws.com/asperatus-seed/moonlight-movement1.mp3"
track8.save!

bussy = User.new()
bussy.username = "Debut(ssy)"
bussy.password = "clairdelune"
bussy.avatar = "https://s3.amazonaws.com/asperatus-seed/debussy.jpg"
bussy.banner = "https://s3.amazonaws.com/asperatus-seed/debussy_banner.jpg"
bussy.save!

track9 = bussy.tracks.new({
  title: 'Arabesque',
  genre: "!Impressionist?"
  })
track9.artwork =  "https://s3.amazonaws.com/asperatus-seed/debussy_3.jpg"
track9.song =  "https://s3.amazonaws.com/asperatus-seed/arabesque1.mp3"
track9.save!

track10 = bussy.tracks.new({
  title: 'Clair de Lune',
  genre: "!Impressionist?"
  })
track10.artwork =  "https://s3.amazonaws.com/asperatus-seed/debussy_2.jpg"
track10.song =  "https://s3.amazonaws.com/asperatus-seed/debussy-clair-de-lune.mp3"
track10.save!

simon = User.new()
simon.username = "IceKing"
simon.password = "cakeandfiona"
simon.avatar = "https://s3.amazonaws.com/asperatus-seed/ice_king2.jpg"
simon.banner = "https://s3.amazonaws.com/asperatus-seed/ice_king1.jpg"
simon.save!

track11 = simon.tracks.new({
  title: 'Tank!',
  genre: "Space Jazz"
  })
track11.artwork = "https://s3.amazonaws.com/asperatus-seed/bebop1.jpg"
track11.song =  "https://s3.amazonaws.com/asperatus-seed/Tank!.mp3"
track11.save!

track12 = simon.tracks.new({
  title: 'Rain',
  genre: "Space Jazz"
  })
track12.artwork = "https://s3.amazonaws.com/asperatus-seed/bebop2.jpg"
track12.song =  "https://s3.amazonaws.com/asperatus-seed/rain.mp3"
track12.save!

track13 = simon.tracks.new({
  title: 'Gerudo',
  genre: "Flamenco"
  })
track13.artwork = "https://s3.amazonaws.com/asperatus-seed/link.png"
track13.song =  "https://s3.amazonaws.com/asperatus-seed/27+Gerudo.mp3"
track13.save!

track14 = simon.tracks.new({
  title: 'Bloody Tears',
  genre: "Retro/Gothic"
  })
track14.artwork = "https://s3.amazonaws.com/asperatus-seed/castle.jpg"
track14.song =  "https://s3.amazonaws.com/asperatus-seed/bloody_tears.mp3"
track14.save!

track15 = simon.tracks.new({
  title: 'Simple and Clean',
  genre: "J-Pop"
  })
track15.artwork = "https://s3.amazonaws.com/asperatus-seed/fiona.jpg"
track15.song =  "https://s3.amazonaws.com/asperatus-seed/Simple+And+Clean.mp3"
track15.save!
