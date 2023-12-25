# app/models/track.rb
class Track < ApplicationRecord
  belongs_to :user
  has_many :track_sample_frames
  has_many :samples, through: :track_sample_frames
  has_many :track_rows

  # バリデーションの例
  validates :name, presence: true
  # その他のバリデーションを必要に応じて追加
end
