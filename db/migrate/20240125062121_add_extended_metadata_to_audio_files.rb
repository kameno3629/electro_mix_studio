class AddExtendedMetadataToAudioFiles < ActiveRecord::Migration[7.0]
  def change
    add_column :audio_files, :bpm, :integer
    add_column :audio_files, :format, :string
  end
end
