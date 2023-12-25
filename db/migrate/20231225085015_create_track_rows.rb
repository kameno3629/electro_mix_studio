class CreateTrackRows < ActiveRecord::Migration[7.0]
  def change
    create_table :track_rows do |t|
      t.references :track, null: false, foreign_key: true
      t.integer :row_position
      t.integer :volume
      t.integer :panning

      t.timestamps
    end
  end
end
