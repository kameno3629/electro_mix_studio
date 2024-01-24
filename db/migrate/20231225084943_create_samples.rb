# frozen_string_literal: true

class CreateSamples < ActiveRecord::Migration[7.0]
  def change
    create_table :samples do |t|
      t.string :name
      t.string :file_path
      t.text :description

      t.timestamps
    end
  end
end
