class AddLengthToSamples < ActiveRecord::Migration[7.0]
  def change
    add_column :samples, :length, :integer
  end
end
