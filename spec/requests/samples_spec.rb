require 'rails_helper'

RSpec.describe "Samples", type: :request do
  describe "GET /index" do
    it "returns http success" do
      get "/samples/index"
      expect(response).to have_http_status(:success)
    end
  end

  describe "GET /show" do
    it "returns http success" do
      get "/samples/show"
      expect(response).to have_http_status(:success)
    end
  end

  describe "GET /create" do
    it "returns http success" do
      get "/samples/create"
      expect(response).to have_http_status(:success)
    end
  end

  describe "GET /destroy" do
    it "returns http success" do
      get "/samples/destroy"
      expect(response).to have_http_status(:success)
    end
  end

end
