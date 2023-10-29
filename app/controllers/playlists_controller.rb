# app/controllers/playlists_controller.rb

class PlaylistsController < ApplicationController
  def index
    @playlists = Playlist.all
  end
end
