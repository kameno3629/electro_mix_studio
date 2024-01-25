# frozen_string_literal: true

require 'rails_helper'

RSpec.describe 'Playlists', type: :request do
  let(:user) { FactoryBot.create(:user) }
  let(:playlist) { FactoryBot.create(:playlist, user: user) }

  describe 'GET /index' do
    it 'returns http success' do
      get playlists_path
      expect(response).to have_http_status(:success)
    end
  end

  describe 'GET /show' do
    it 'returns http success' do
      get playlist_path(playlist)
      expect(response).to have_http_status(:success)
    end
  end

  # 以下のテストは通常のCRUD操作ではGETリクエストでアクセスしないため、削除または修正が必要です。
  # 例: POST /playlists はプレイリストの作成、PATCH/PUT /playlists/:id はプレイリストの更新、DELETE /playlists/:id はプレイリストの削除に使用します。
end
