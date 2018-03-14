class Track < ApplicationRecord
  validates :title, :genre, presence: true

  belongs_to :artist,
  foreign_key: :artist_id,
  class_name: 'User',
  primary_key: :id

  has_many :comments,
  dependent: :destroy

  has_many :comment_authors,
  through: :comments


  has_attached_file :artwork, styles:{medium:"340x340",thumb: "172.97x172.97"} ,default_url: "giraffe.jpg"
  validates_attachment_content_type :artwork, content_type: /\Aimage\/.*\z/

  has_attached_file :song, default_url: "sample.4mb.mp3"
  validates_attachment_content_type :song, content_type: [ 'audio/mpeg', 'audio/x-mpeg', 'audio/mp3', 'audio/x-mp3', 'audio/mpeg3', 'audio/x-mpeg3', 'audio/mpg', 'audio/x-mpg', 'audio/x-mpegaudio' ]
end
