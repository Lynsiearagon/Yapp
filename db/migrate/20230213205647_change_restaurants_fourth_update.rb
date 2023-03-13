class ChangeRestaurantsFourthUpdate < ActiveRecord::Migration[7.0]
  def change
    add_column :restaurants, :hours, :json, null: false 
  end
end
