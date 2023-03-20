class CreateReviews < ActiveRecord::Migration[7.0]
  def change
    create_table :reviews do |t|
      t.text :body, null: false
      t.integer :star_rating, null: false 
      t.references :reviewer, null: false, foreign_key: { to_table: :users }
      t.references :restaurant, null: false, foreign_key: true 

      t.timestamps
    end
  end
end
