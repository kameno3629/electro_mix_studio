require 'rails_helper'

RSpec.describe "Tracks", type: :request do
  describe "GET /index" do
    it "returns http success" do
      get "/tracks/index"
      expect(response).to have_http_status(:success)
    end
  end

  describe "GET /show" do
    it "returns http success" do
      get "/tracks/show"
      expect(response).to have_http_status(:success)
    end
  end

  describe "GET /create" do
    it "returns http success" do
      get "/tracks/create"
      expect(response).to have_http_status(:success)
    end
  end

  describe "GET /update" do
    it "returns http success" do
      get "/tracks/update"
      expect(response).to have_http_status(:success)
    end
  end

  describe "GET /destroy" do
    it "returns http success" do
      get "/tracks/destroy"
      expect(response).to have_http_status(:success)
    end
  end

end
