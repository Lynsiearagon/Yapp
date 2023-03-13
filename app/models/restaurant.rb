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
    validates :opening_hours, presence: true 
    validates :closing_hours, presence: true 
    validates :phone_number, presence: true 
    validates :cuisine, presence: true 
    validates :price, presence: true 
    validates :website_link, presence: true 
    validates :amenities, presence: true 



end
