class RemoveAudioPathFromSamples < ActiveRecord::Migration[7.0]
  def change
    remove_column :samples, :audio_path, :string
  end
end
