require 'rails_helper'

RSpec.describe "Tracks", type: :request do
  describe "GET /index" do
    it "returns http success" do
      get "/tracks"
      expect(response).to have_http_status(:success)
    end
  end

  describe "GET /show" do
    it "returns http success" do
      user = FactoryBot.create(:user)
      track = FactoryBot.create(:track, user: user)
      get "/tracks/#{track.id}"
      expect(response).to have_http_status(:success)
    end
  end

  describe "POST /create" do
    it "returns http success" do
      user = FactoryBot.create(:user) # FactoryBot を使用してユーザーを生成
      valid_track_params = {
        name: "Valid Track Name",
        user_id: user.id, # 生成したユーザーの ID を使用
        tempo_adjustment: 120 # tempo_adjustment パラメーターを含む
      }
  
      post "/tracks", params: { track: valid_track_params }
  
      # リダイレクトをフォローして、リダイレクト先のHTTPステータスを確認
      follow_redirect!
      
      expect(response).to have_http_status(:success)
    end
  end  

  describe "GET /update" do
    it "returns http success" do
      user = FactoryBot.create(:user)
      track = FactoryBot.create(:track, user: user)
      get "/tracks/#{track.id}/edit"
      expect(response).to have_http_status(:success)
    end
  end

  describe "GET /destroy" do
    it "returns http success" do
      user = FactoryBot.create(:user)
      track = FactoryBot.create(:track, user: user)
      delete "/tracks/#{track.id}"
      expect(response).to have_http_status(:success)
    end
  end
end


