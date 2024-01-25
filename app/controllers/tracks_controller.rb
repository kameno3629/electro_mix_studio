# frozen_string_literal: true

# app/controllers/tracks_controller.rb
class TracksController < ApplicationController
  def index
    @tracks = Track.all
    render json: @tracks
  end

  def show
    track = Track.find(params[:id])
    render json: track
  end

  def create
    @track = Track.new(track_params)
    if @track.save
      redirect_to @track, notice: 'Track was successfully created.'
    else
      logger.error @track.errors.full_messages # バリデーションエラーのログ出力
      render :new, status: :unprocessable_entity
    end
  end

  def edit
    @track = Track.find(params[:id])
    render json: @track # JSON レスポンスを返す
  end

  def update
    @track = Track.find(params[:id])
    if @track.update(track_params)
      # 成功の処理
    else
      # 失敗の処理
    end
  end

  def destroy
    @track = Track.find(params[:id])
    @track.destroy
    # 削除後の処理
  end

  private
  def track_params
    params.require(:track).permit(:name, :user_id, :tempo_adjustment)
  end  

end
