class HomeController < ApplicationController
  def index
    @audio_files = AudioFile.all
  end
end
