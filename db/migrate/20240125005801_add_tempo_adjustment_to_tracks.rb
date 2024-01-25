class AddTempoAdjustmentToTracks < ActiveRecord::Migration[7.0]
  def change
    add_column :tracks, :tempo_adjustment, :integer
  end
end
