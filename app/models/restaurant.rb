class Restaurant < ApplicationRecord

    validates :restaurant_name, presence: true 
    validates :latitude, presence: true 
    validates :longitude, presence: true 
    validates :address, presence: true 
    validates :opening_hours, presence: true 
    validates :closing_hours, presence: true 
    validates :phone_number, presence: true 
    validates :cuisine, presence: true 
    validates :price, presence: true 
    validates :website_link, presence: true 
    validates :about_restaurant, presence: true 
    validates :photo_url, allow_nil: true 
    validates :amenities, presence: true 



end
