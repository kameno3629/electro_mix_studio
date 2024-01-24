# frozen_string_literal: true

# app/models/sample.rb
class Sample < ApplicationRecord
  has_many :track_sample_frames

  # 新しいカラムの追加（例: 長さ、種類）
  validates :name, presence: true
  validates :file_path, presence: true
  validates :length, numericality: { only_integer: true, greater_than: 0 }, allow_nil: true
  validates :type, presence: true

  # その他のバリデーションを必要に応じて追加
end
