class TracksController < ApplicationController
  def index
    tracks = Track.all
    render json: { status: 'SUCCESS', data: tracks }
  end

  def create
    track = Track.new(track_params)
    if track.save
      render json: { status: 'SUCCESS', data: track }
    else
      render json: { status: 'ERROR', data: track.errors }
    end
  end

  def new
    @track = Track.new
  end

  def show
    @track = Track.find(params[:id])
  end

  def export
    @track = Track.find(params[:id])
    # ここでトラックをエクスポートするロジックを実装
  end

  private

  def track_params
    params.require(:track).permit(:name, sound_sources: [])
  end
end