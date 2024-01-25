class AudioFile < ApplicationRecord
    belongs_to :audio_category
    has_one_attached :file
end
  