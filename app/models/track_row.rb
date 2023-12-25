# app/models/track_row.rb
class TrackRow < ApplicationRecord
  belongs_to :track

  # バリデーションの例
  validates :row_position, numericality: { only_integer: true }
end
