class Comment < ApplicationRecord
  validates :body, presence: true

  belongs_to :author,
  class_name: 'User',
  foreign_key: :author_id,
  primary_key: :id

  belongs_to :track 
end
