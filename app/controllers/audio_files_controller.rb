class AudioFilesController < ApplicationController
    def new
      @audio_file = AudioFile.new
    end
  
    def create
      @audio_file = AudioFile.new(audio_file_params)
  
      if @audio_file.save
        redirect_to @audio_file, notice: '音源ファイルが正常にアップロードされました。'
      else
        render :new
      end
    end
  
    private
  
    def audio_file_params
      params.require(:audio_file).permit(:file)
    end
end
  