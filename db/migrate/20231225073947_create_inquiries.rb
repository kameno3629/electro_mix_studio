# frozen_string_literal: true

class CreateInquiries < ActiveRecord::Migration[7.0]
  def change
    create_table :inquiries do |t|
      t.references :user, null: false, foreign_key: true
      t.text :content

      t.timestamps
    end
  end
end
