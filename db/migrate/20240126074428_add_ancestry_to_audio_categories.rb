class AddAncestryToAudioCategories < ActiveRecord::Migration[7.0]
  def change
    add_column :audio_categories, :ancestry, :string
    add_index :audio_categories, :ancestry
  end
end
