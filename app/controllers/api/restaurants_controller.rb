class Api::RestaurantsController < ApplicationController

    wrap_parameters include: Restaurant.attribute_names + ["restaurantId", "restaurantName"]

    def index 
        # cuisine_type = params[:cuisine]
        # search_term = params[:search_term]

        # if query == ''
            @restaurants = Restaurant.all 
            render '/api/restaurants/index'
        # elsif query != ''
            # @restaurants = Restaurant.where("cuisine ILIKE ?", "%#{cuisine_type}%")
            # render '/api/restaurants/index'
        # end
    end

    def show 
        @restaurant = Restaurant.find(params[:id])
        render 'api/restaurants/show'
    end

end
