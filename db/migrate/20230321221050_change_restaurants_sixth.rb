class ChangeRestaurantsSixth < ActiveRecord::Migration[7.0]
  def change
    remove_column :restaurants, :opening_hours
    remove_column :restaurants, :closing_hours
  end
end
