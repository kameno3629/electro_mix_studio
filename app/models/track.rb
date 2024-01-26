# frozen_string_literal: true

# app/models/track.rb
class Track < ApplicationRecord
  belongs_to :user
  has_many :track_rows
  has_many :track_audio_files
  has_many :audio_files, through: :track_audio_files

  # バリデーションの例
  validates :name, presence: true
  # その他のバリデーションを必要に応じて追加

  def sound_sources
    self.audio_files.map { |audio_file| audio_file.file.service_url }
  end
end
