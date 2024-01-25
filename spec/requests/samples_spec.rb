# frozen_string_literal: true

require 'rails_helper'

RSpec.describe 'Samples', type: :request do
  let(:sample) { FactoryBot.create(:sample) }

  describe 'GET /index' do
    it 'returns http success' do
      get samples_path
      expect(response).to have_http_status(:success)
    end
  end

  describe 'GET /show' do
    it 'returns http success' do
      get sample_path(sample)
      expect(response).to have_http_status(:success)
    end
  end

  # POST /samples などのテストを追加する場合は、ここに記述します。
  # 例:
  # describe 'POST /samples' do
  #   it 'creates a new sample' do
  #     expect {
  #       post samples_path, params: { sample: { name: 'New Sample', description: 'Sample description' } }
  #     }.to change(Sample, :count).by(1)
  #     expect(response).to redirect_to(Sample.last)
  #   end
  # end
end


