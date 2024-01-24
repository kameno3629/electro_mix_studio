require 'rails_helper'

RSpec.describe "Tracks", type: :request do
  describe "GET /index" do
    it "returns http success" do
      get "/tracks" # ルーティングを修正し、"/tracks" にアクセスするように変更
      expect(response).to have_http_status(:success)
    end
  end

  describe "GET /show" do
    it "returns http success" do
      user = FactoryBot.create(:user) # Userモデルを作成
      track = FactoryBot.create(:track, user: user) # テストデータを作成し、関連するUserを指定
      get "/tracks/#{track.id}" # テストデータのIDを使用して "/tracks/:id" にアクセスするように変更
      expect(response).to have_http_status(:success)
    end
  end

  describe "POST /create" do
    it "returns http success" do
      # 有効なトラックのパラメータを作成する
      valid_track_params = {
        name: "Valid Track Name",
        tempo_adjustment: 120,
        frame_length: 1000
      }

      # /tracks に POST リクエストを送信し、有効なパラメータを含める
      post "/tracks", params: { track: valid_track_params }
  
      # リクエストが成功したことを検証
      expect(response).to have_http_status(:success)
    end
  end  

  describe "GET /update" do
    it "returns http success" do
      user = FactoryBot.create(:user) # Userモデルを作成
      track = FactoryBot.create(:track, user: user) # テストデータを作成し、関連するUserを指定
      get "/tracks/#{track.id}/edit" # テストデータのIDを使用して "/tracks/:id/edit" にアクセスするように変更
      expect(response).to have_http_status(:success)
    end
  end

  describe "GET /destroy" do
    it "returns http success" do
      user = FactoryBot.create(:user) # Userモデルを作成
      track = FactoryBot.create(:track, user: user) # テストデータを作成し、関連するUserを指定
      delete "/tracks/#{track.id}" # テストデータのIDを使用して削除リクエストを送信するように変更
      expect(response).to have_http_status(:success)
    end
  end
end

