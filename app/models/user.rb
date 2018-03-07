class User < ApplicationRecord
  validates :username, :password_digest, :session_token, presence: true
  validates :password, length: { minimum:6, allow_nil: true }

  attr_reader :password

  has_many :tracks, foreign_key: :artist_id

  after_initialize :ensure_session_token


  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom::urlsafe_base64
    self.save!
    self.session_token
  end

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    user && user.is_password?(password) ? user : nil
  end


private
  def ensure_session_token
    self.session_token ||= SecureRandom::urlsafe_base64
  end
end
