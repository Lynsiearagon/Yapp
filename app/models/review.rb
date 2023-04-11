# == Schema Information
#
# Table name: reviews
#
#  id                  :bigint           not null, primary key
#  body                :text             not null
#  star_rating         :integer          not null
#  reviewer_id         :bigint           not null
#  restaurant_id       :bigint           not null
#  created_at          :datetime         not null
#  updated_at          :datetime         not null
#  photo_url           :string
#  reviewer_first_name :string           not null
#  reviewer_last_name  :string
#
class Review < ApplicationRecord
    validates :body, length: { minimum: 100, message: ['needs a little more detail.'] }
    validates :star_rating, inclusion: { in: 1..5, message: ['must be selected.'] }
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
