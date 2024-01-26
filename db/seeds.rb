require 'find'
require 'waveinfo'
require 'aws-sdk-s3'  # AWS SDK for Ruby

# AWS S3クライアントの設定
s3 = Aws::S3::Resource.new(region: 'ap-northeast-1')  # 適切なリージョンを設定
bucket = s3.bucket('electro-mix-studio')

# 音源ファイルが保存されているディレクトリのパス
audio_files_dir = "/Users/kspc/Documents/EDM音源/Cymatics - Phoenix Rebirth"

# カテゴリを決定するためのマッピング
category_mapping = {
  # 他のカテゴリマッピングを追加...
}

# ディレクトリ内のすべてのサブディレクトリを再帰的に取得
subdirs = Dir.glob("#{audio_files_dir}/**/*").select { |f| File.directory?(f) }

# 各サブディレクトリに対して
subdirs.each do |dir|
  # カテゴリ名をサブディレクトリのパスから取得
  category_names = dir.sub(audio_files_dir, '').split('/').reject(&:empty?)
  parent_category = nil

  # 階層的なカテゴリを作成または取得
  category_names.each do |category_name|
    category_name = category_mapping[category_name] || category_name
    category_name = category_name.gsub(/Cymatics|-/, '').strip  # "Cymatics"と"-"を除去
    parent_category = if parent_category
                      parent_category.children.find_or_create_by(name: category_name)
                    else
                      AudioCategory.find_or_create_by(name: category_name)
                    end
  end

  # サブディレクトリ内のすべての音源ファイルを取得
  audio_files = Dir.glob("#{dir}/*.{wav,mp3}")

  # 各音源ファイルをデータベースに登録
  audio_files.each do |file|
    next if File.directory?(file)  # ディレクトリはスキップ
    next if File.extname(file).downcase == '.midi'  # MIDIファイルはスキップ

    file_name = File.basename(file, ".*")  # ファイル名（拡張子なし）
    file_name = file_name.gsub(/Cymatics|-/, '').strip  # "Cymatics"と"-"を除去し、余分な空白を削除
    s3_key = "#{dir.sub(audio_files_dir, '').sub(/^\//, '')}/#{file_name}.wav"  # S3のキー
    file_path = "https://electro-mix-studio.s3.amazonaws.com/#{s3_key}"  # S3のURL

    # 音源ファイルの情報を取得
    wave_info = WaveInfo.new(file)
    length = wave_info.duration  # 長さを取得

    # ファイル名からBPMとキーを抽出
    bpm = file_name[/(\d+) BPM/, 1]&.to_i
    key = file_name[/([A-G]#? [Mm]in|[A-G]#? Maj)/, 1]

    # S3に音源ファイルをアップロード
    obj = bucket.object(s3_key)
    obj.upload_file(file)

    AudioFile.find_or_create_by(
      name: file_name,
      description: "音源の説明",  # 適切な説明を設定
      length: length,  # 取得した長さを設定
      key: key,  # 抽出したキーを設定
      bpm: bpm,  # 抽出したBPMを設定
      format: 'wav',  # 適切なフォーマットを設定
      audio_path: file_path,
      audio_category: parent_category  # 作成したカテゴリを設定
    )
  end
end