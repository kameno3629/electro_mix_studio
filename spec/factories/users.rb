# frozen_string_literal: true

# spec/factories/users.rb
FactoryBot.define do
  factory :user do
    username { 'testuser' }
    email { 'test@example.com' }
    password { 'password' }
    # その他のUserモデルの属性に応じて追加
  end
end
