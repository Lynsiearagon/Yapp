class Api::RestaurantsController < ApplicationController

    wrap_parameters include: Restaurant.attribute_names + ["restaurantId", "restaurantName"]

    def index 
        cuisine_type = params[:cuisine]
        price_filter = params[:price]
        search_term = params[:search_term]

        if cuisine_type == '' && search_term == '' && price_filter == ''
            @restaurants = Restaurant.all 
            render '/api/restaurants/index'
        elsif 
            cuisine_type != '' && search_term == '' && price_filter == ''
            @restaurants = Restaurant.where("cuisine ILIKE ?", "%#{cuisine_type}%")
            render '/api/restaurants/index'
        elsif 
            cuisine_type == '' && search_term != '' && price_filter == ''
            @restaurants = Restaurant.where("restaurant_name ILIKE ?", "%#{search_term}%") || 
                           Restaurant.where("cuisine ILIKE ?", "%#{search_term}%")
            render '/api/restaurants/index'
        elsif 
            cuisine_type == '' && search_term == '' && price_filter != ''
            @restaurants = Restaurant.where("price = #{price_filter}")
            render '/api/restaurants/index'
        end
    end

    def show 
        @restaurant = Restaurant.find(params[:id])
        render 'api/restaurants/show'
    end

end
