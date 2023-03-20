class ChangeRestaurantsFifth < ActiveRecord::Migration[7.0]
  def change
    add_column :restaurants, :total_num_reviews, :integer
    add_column :restaurants, :total_five_star_reviews, :integer
    add_column :restaurants, :total_four_star_reviews, :integer
    add_column :restaurants, :total_three_star_reviews, :integer
    add_column :restaurants, :total_two_star_reviews, :integer
    add_column :restaurants, :total_one_star_reviews, :integer
    add_column :restaurants, :overall_rating, :float
  end
end
