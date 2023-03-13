class Api::RestaurantsController < ApplicationController

    wrap_parameters include: Restaurant.attribute_names

    def index 
        @restaurants = Restaurant.all 
        render '/api/restaurants/index'
    end

    def show 
        @restaurant = Restaurant.find(params[:id])
        render 'api/restaurants/show'
    end

end
