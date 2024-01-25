# frozen_string_literal: true

require 'rails_helper'

RSpec.describe 'Users', type: :request do
  let(:user) { FactoryBot.create(:user) }

  describe 'GET /new' do
    it 'returns http success' do
      get new_user_path
      expect(response).to have_http_status(:success)
    end
  end

  describe 'GET /show' do
    it 'returns http success' do
      get user_path(user)
      expect(response).to have_http_status(:success)
    end
  end

  # GET /create は通常のCRUD操作では使用しないため、削除が必要です。
end

