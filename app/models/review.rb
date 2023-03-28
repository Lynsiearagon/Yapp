class Review < ApplicationRecord
    validates :body, length: { minimum: 200 }
    validates :star_rating, inclusion: { in: 1..5 }
    # validates :reviewer_id, presence: true, uniqueness: true 
    # validates :restaurant_id, presence: true, uniqueness: true
    # validates :reviewer_first_name, presence: true 
    # validates :reviewer_last_name, presence: true


    belongs_to :reviewer, 
        primary_key: :id, 
        foreign_key: :reviewer_id,
        class_name: :User 

    belongs_to :restaurant, 
        primary_key: :id, 
        foreign_key: :restaurant_id, 
        class_name: :Restaurant

end
