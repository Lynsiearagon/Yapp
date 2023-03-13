class ChangeRestaurants < ActiveRecord::Migration[7.0]
  def change
    add_column :restaurants, :street_address, :string, null: false 
    add_column :restaurants, :city, :string, null: false 
    add_column :restaurants, :zipcode, :string, null: false 
    add_column :restaurants, :state, :string, null: false 
    add_column :restaurants, :country, :string, null: false 
    add_column :restaurants, :menu_link, :string, null: false 
    remove_column :restaurants, :address
    remove_column :restaurants, :longitude
    remove_column :restaurants, :latitude
    add_column :restaurants, :longitude, :float, null: false 
    add_column :restaurants, :latitude, :float, null:false 
  end
end
