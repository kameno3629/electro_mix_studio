class AddAudioPathToSamples < ActiveRecord::Migration[7.0]
  def change
    add_column :samples, :audio_path, :string
  end
end
