class ChangeReviews < ActiveRecord::Migration[7.0]
  def change
    add_column :reviews, :photo_url, :string
  end
end
