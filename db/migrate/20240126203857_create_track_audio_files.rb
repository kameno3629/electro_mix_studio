class CreateTrackAudioFiles < ActiveRecord::Migration[7.0]
  def change
    create_table :track_audio_files do |t|
      t.references :track, null: false, foreign_key: true
      t.references :audio_file, null: false, foreign_key: true

      t.timestamps
    end
  end
end
