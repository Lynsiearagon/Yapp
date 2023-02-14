class Api::RestaurantsController < ApplicationController

    def index 
        @restaurants = Restaurant.all 
        render '/api/restaurants/index'
    end

end
