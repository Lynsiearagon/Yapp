class ChangeReviewsThird < ActiveRecord::Migration[7.0]
  def change
    add_column :reviews, :reviewer_last_name, :string, presence: true 
  end
end
