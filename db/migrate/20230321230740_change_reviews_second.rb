class ChangeReviewsSecond < ActiveRecord::Migration[7.0]
  def change
    add_column :reviews, :reviewer_first_name, :string, null: false 
  end
end
