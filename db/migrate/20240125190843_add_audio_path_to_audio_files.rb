class AddAudioPathToAudioFiles < ActiveRecord::Migration[7.0]
  def change
    add_column :audio_files, :audio_path, :string
  end
end