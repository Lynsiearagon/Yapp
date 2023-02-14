class Api::RestaurantsController < ApplicationController

    wrap_parameters include: Restaurant.attribute_names

    def index 
        @restaurants = Restaurant.all 
        render '/api/restaurants/index'
    end

end
