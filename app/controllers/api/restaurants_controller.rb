class Api::RestaurantsController < ApplicationController

    wrap_parameters include: Restaurant.attribute_names + ["restaurantId", "restaurantName"]

    def index

        p "PARAMS PRESENCE IS: #{params[:cuisine].present?}"

        if !params[:cuisine].present?
            @restaurants = Restaurant.all
        else  
           @restaurants = Restaurant.where("cuisine ILIKE ?", "%" + params[:cuisine] + "%")
        end

        # if params[:cuisine].present?
        #     @restaurants = Restaurant.where("cuisine ILIKE ?", "%" + params[:cuisine] + "%")
        # end
        
        render '/api/restaurants/index'


        # CODE TO USE LATER.....

        # price_filter = params[:price] ||= ''
        # search_term = params[:search_term] ||= ''

        # USE LATER: && search_term == '' && price_filter == ''
        # USE LATER: && search_term == '' && price_filter == ''

        # elsif 
        #     cuisine_type == '' && search_term != '' && price_filter == ''
        #     @restaurants = Restaurant.where("restaurant_name ILIKE ?", "%#{search_term}%") || 
        #                    Restaurant.where("cuisine ILIKE ?", "%#{search_term}%")
        # elsif 
        #     cuisine_type == '' && search_term == '' && price_filter != ''
        #     @restaurants = Restaurant.where("price = #{price_filter}")

    end


    def show 
        @restaurant = Restaurant.find(params[:id])
        render 'api/restaurants/show'
    end

end
