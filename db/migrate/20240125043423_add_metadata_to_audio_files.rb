class AddMetadataToAudioFiles < ActiveRecord::Migration[7.0]
  def change
    add_column :audio_files, :length, :integer
    add_column :audio_files, :key, :string
  end
end
