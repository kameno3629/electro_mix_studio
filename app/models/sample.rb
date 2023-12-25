# app/models/sample.rb
class Sample < ApplicationRecord
    has_many :track_sample_frames
  
    # バリデーションの例
    validates :name, presence: true
    validates :file_path, presence: true
end
  