class Track < ApplicationRecord
  validates :title, :genre, presence: true

  belongs_to :artist,
  foreign_key: :artist_id,
  class_name: 'User',
  primary_key: :id

  has_attached_file :artwork, styles:{medium:"340x340",thumb: "172.97x172.97"} ,default_url: "giraffe.jpg"
  validates_attachment_content_type :artwork, content_type: /\Aimage\/.*\z/

end
