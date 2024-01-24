# frozen_string_literal: true

# app/models/track_sample_frame.rb
class TrackSampleFrame < ApplicationRecord
  belongs_to :track
  belongs_to :sample

  # バリデーションの例
  validates :frame_position, numericality: { only_integer: true }
end
