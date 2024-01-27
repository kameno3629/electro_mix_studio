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
  
    def index
      # AWS S3から音源ファイルのリストを取得
      audio_files = fetch_audio_files_from_aws
  
      # ファイルのリストをJSON形式でレスポンスとして返す
      render json: audio_files
    end
  
    private
  
    def audio_file_params
      params.require(:audio_file).permit(:file)
    end
  
    def fetch_audio_files_from_aws
      s3_client = Aws::S3::Client.new(region: 'ap-northeast-1') # 適切なリージョンに設定
      bucket_name = 'electro-mix-studio' # 適切なバケット名に設定
  
      resp = s3_client.list_objects_v2(bucket: bucket_name)
      audio_files = resp.contents.map do |file|
        {
          name: file.key,
          url: Aws::S3::Object.new(bucket_name, file.key, client: s3_client).public_url
        }
      end
  
      audio_files
    end
  end
  