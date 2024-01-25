class AddDescriptionToAudioFiles < ActiveRecord::Migration[7.0]
  def change
    add_column :audio_files, :description, :text
  end
end
