# app/controllers/tracks_controller.rb
class TracksController < ApplicationController
  def index
    @tracks = Track.all
    render json: @tracks
  end

  def show
    @track = Track.find(params[:id])
  end

  def create
    @track = Track.new(track_params)
    if @track.save
      render json: @track, status: :created
    else
      render json: @track.errors, status: :unprocessable_entity
    end
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
    params.require(:track).permit(:name, :data, :pitch_adjustment, :tempo_adjustment, :frame_length)
  end
end

