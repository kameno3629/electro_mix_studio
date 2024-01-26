class AudioFile < ApplicationRecord
    belongs_to :audio_category
    has_one_attached :file
    has_many :track_audio_files
    has_many :tracks, through: :track_audio_files
end
  