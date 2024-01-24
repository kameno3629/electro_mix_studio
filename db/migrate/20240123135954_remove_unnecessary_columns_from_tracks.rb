class RemoveUnnecessaryColumnsFromTracks < ActiveRecord::Migration[7.0]
  def change
    remove_column :tracks, :data, :json
    remove_column :tracks, :pitch_adjustment, :integer
    remove_column :tracks, :tempo_adjustment, :integer
    remove_column :tracks, :frame_length, :integer
  end
end
