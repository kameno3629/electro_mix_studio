# frozen_string_literal: true

# app/models/playlist_track.rb
class PlaylistTrack < ApplicationRecord
  belongs_to :playlist
  belongs_to :track

  # バリデーションの例
  validates :order, numericality: { only_integer: true }
end
