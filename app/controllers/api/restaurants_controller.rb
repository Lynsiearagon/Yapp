class Api::RestaurantsController < ApplicationController

    wrap_parameters include: Restaurant.attribute_names + ["restaurantId", "restaurantName"]

    def index

        cuisine_type = params[:cuisine]
        price_type = params[:price]
        query_term = params[:query]
        neighborhood = params[:neighborhood]

        if !cuisine_type.present? && !price_type.present? && !query_term.present? && !neighborhood.present?
            @restaurants = Restaurant.all

        elsif cuisine_type.present? && !price_type.present? && !query_term.present?  && !neighborhood.present?
            @restaurants = Restaurant.where("cuisine ILIKE ?", "%" + cuisine_type + "%") 
        
        elsif !cuisine_type.present? && price_type.present? && !query_term.present?  && !neighborhood.present?
            @restaurants = Restaurant.where("price = ?", price_type)

        elsif !cuisine_type.present? && !price_type.present? && query_term.present?  && !neighborhood.present?
            @restaurants = Restaurant.where("restaurant_name || cuisine ILIKE ?", "%" + query_term + "%")

        elsif !cuisine_type.present? && !price_type.present? && !query_term.present?  && neighborhood.present?
            @restaurants = Restaurant.where("neighborhood ILIKE ?", neighborhood)
        end
        
        render '/api/restaurants/index'

    end


    def show 
        @restaurant = Restaurant.find(params[:id])
        render 'api/restaurants/show'
    end

end
