class CreateSections < ActiveRecord::Migration[7.0]
  def change
    create_table :sections do |t|
      t.string :name
      t.integer :track_id
      t.integer :position # セクションの位置
      t.integer :length   # セクションの長さ

      t.timestamps
    end
    add_index :sections, :track_id
  end
end
