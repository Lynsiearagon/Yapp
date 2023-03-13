class ChangeRestaurantsThirdUpdate < ActiveRecord::Migration[7.0]
  def change
    remove_column :restaurants, :about_restaurant
    remove_column :restaurants, :menu_link
    add_column :restaurants, :about_restaurant, :string 
    add_column :restaurants, :menu_link, :string

  end
end
