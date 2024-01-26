class DropSampleAndTrackSampleFrameTables < ActiveRecord::Migration[6.0]
  def up
    drop_table :track_sample_frames, force: :cascade
    drop_table :samples, force: :cascade
  end

  def down
    raise ActiveRecord::IrreversibleMigration
  end
end