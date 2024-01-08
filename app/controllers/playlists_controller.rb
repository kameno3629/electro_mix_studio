# app/controllers/playlists_controller.rb
class PlaylistsController < ApplicationController
  def index
    @playlists = Playlist.all
  end

  def show
    @playlist = Playlist.find(params[:id])
  end

  def create
    @playlist = Playlist.new(playlist_params)
    if @playlist.save
      # 成功の処理
    else
      # 失敗の処理
    end
  end

  def update
    @playlist = Playlist.find(params[:id])
    if @playlist.update(playlist_params)
      # 成功の処理
    else
      # 失敗の処理
    end
  end

  def destroy
    @playlist = Playlist.find(params[:id])
    @playlist.destroy
    # 削除後の処理
  end

  private

  def playlist_params
    params.require(:playlist).permit(:name)
  end
end

