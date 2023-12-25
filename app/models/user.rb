# app/models/user.rb
class User < ApplicationRecord
    has_many :inquiries
    has_many :playlists
    has_many :tracks
  
    # バリデーションの例
    validates :username, presence: true, uniqueness: true
    validates :email, presence: true, uniqueness: true, format: { with: URI::MailTo::EMAIL_REGEXP }
end
  
