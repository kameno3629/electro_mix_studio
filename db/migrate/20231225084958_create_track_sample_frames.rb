# frozen_string_literal: true

class CreateTrackSampleFrames < ActiveRecord::Migration[7.0]
  def change
    create_table :track_sample_frames do |t|
      t.references :track, null: false, foreign_key: true
      t.references :sample, null: false, foreign_key: true
      t.integer :row_id
      t.integer :frame_position

      t.timestamps
    end
  end
end
