class AudioCategory < ApplicationRecord
    has_many :audio_files
    has_ancestry
end