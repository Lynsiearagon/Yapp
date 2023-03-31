# == Schema Information
#
# Table name: restaurants
#
#  id                       :bigint           not null, primary key
#  restaurant_name          :string           not null
#  phone_number             :string           not null
#  cuisine                  :string           not null
#  price                    :string           not null
#  website_link             :string           not null
#  photo_url                :string
#  amenities                :string           not null
#  created_at               :datetime         not null
#  updated_at               :datetime         not null
#  street_address           :string           not null
#  city                     :string           not null
#  zipcode                  :string           not null
#  state                    :string           not null
#  country                  :string           not null
#  longitude                :float            not null
#  latitude                 :float            not null
#  neighborhood             :string           not null
#  about_restaurant         :string
#  menu_link                :string
#  hours                    :json             not null
#  total_num_reviews        :integer
#  total_five_star_reviews  :integer
#  total_four_star_reviews  :integer
#  total_three_star_reviews :integer
#  total_two_star_reviews   :integer
#  total_one_star_reviews   :integer
#  overall_rating           :float
#
class Restaurant < ApplicationRecord

    validates :restaurant_name, presence: true 
    validates :latitude, presence: true 
    validates :longitude, presence: true 
    validates :city, presence: true 
    validates :zipcode, presence: true 
    validates :state, presence: true 
    validates :street_address, presence: true 
    validates :country, presence: true 
    validates :neighborhood, presence: true 
    validates :phone_number, presence: true 
    validates :cuisine, presence: true 
    validates :price, presence: true 
    validates :website_link, presence: true 
    validates :amenities, presence: true 
    validates :hours, presence: true 

    has_many :reviews, 
        primary_key: :id, 
        foreign_key: :restaurant_id, 
        class_name: :Review,
        dependent: :destroy

end
