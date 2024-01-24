# frozen_string_literal: true

# app/controllers/samples_controller.rb
class SamplesController < ApplicationController
  def index
    @samples = Sample.all
  end

  def show
    @sample = Sample.find(params[:id])
  end

  def create
    @sample = Sample.new(sample_params)
    if @sample.save
      # 成功の処理
    else
      # 失敗の処理
    end
  end

  def destroy
    @sample = Sample.find(params[:id])
    @sample.destroy
    # 削除後の処理
  end

  private

  def sample_params
    params.require(:sample).permit(:name, :file_path, :description)
  end
end
