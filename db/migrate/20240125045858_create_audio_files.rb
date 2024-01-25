class CreateAudioFiles < ActiveRecord::Migration[6.0]
  def change
    create_table :audio_files do |t|
      t.string :name
      t.references :audio_category, foreign_key: true
      # 他に必要なカラムがあればここに追加

      t.timestamps
    end
  end
end
