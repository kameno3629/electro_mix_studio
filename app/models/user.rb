# frozen_string_literal: true

class User < ApplicationRecord
  has_many :inquiries
  has_many :playlists
  has_many :tracks

  validates :username, presence: true, uniqueness: true
  validates :email, presence: true, uniqueness: true, format: { with: URI::MailTo::EMAIL_REGEXP }

  has_secure_password
end
