class EdmController < ApplicationController
    def create
        @audio_files = AudioFile.all
    end
end
