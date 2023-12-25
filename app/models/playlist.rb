# app/models/playlist.rb
class Playlist < ApplicationRecord
  belongs_to :user
  has_many :playlist_tracks
  has_many :tracks, through: :playlist_tracks

  # バリデーションの例
  validates :name, presence: true
end
