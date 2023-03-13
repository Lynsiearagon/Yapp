class CreateRestaurants < ActiveRecord::Migration[7.0]
  def change
    create_table :restaurants do |t|
      t.string :restaurant_name, null: false
      t.string :latitude, null: false
      t.string :longitude, null: false
      t.string :address, null: false
      t.string :opening_hours, null: false
      t.string :closing_hours, null: false
      t.string :phone_number, null: false, unique: true 
      t.string :cuisine, null: false
      t.string :price, null: false
      t.string :website_link, null: false
      t.string :about_restaurant, null: false
      t.string :photo_url
      t.string :amenities, null: false

      t.timestamps
    end
    add_index :restaurants, :restaurant_name
    add_index :restaurants, :opening_hours
    add_index :restaurants, :closing_hours
    add_index :restaurants, :cuisine
    add_index :restaurants, :price
  end
end
