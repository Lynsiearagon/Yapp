class ChangeRestaurantsSecondUpdate < ActiveRecord::Migration[7.0]
  def change
    add_column :restaurants, :neighborhood, :string, null: false
    add_index :restaurants, :neighborhood
  end
end
