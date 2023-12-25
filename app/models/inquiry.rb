# app/models/inquiry.rb
class Inquiry < ApplicationRecord
  belongs_to :user

  # バリデーションの例
  validates :content, presence: true
end

