# frozen_string_literal: true

class CreateTracks < ActiveRecord::Migration[7.0]
  def change
    create_table :tracks do |t|
      t.references :user, null: false, foreign_key: true
      t.string :name
      t.json :data
      t.integer :pitch_adjustment
      t.integer :tempo_adjustment
      t.integer :frame_length

      t.timestamps
    end
  end
end
