class Api::ReviewsController < ApplicationController

    wrap_parameters include: Review.attribute_names

    before_action :require_logged_in, only: [:create, :update, :destroy]

    def create 
        @review = Review.new(review_params)
        @review.reviewer_id = current_user.id 

        if @review.save
            redirect_to api_restaurant_url(@review.restaurant_id)
        else
            render json: { errors: @review.errors.full_messages}, status: 422
        end
    end

    def index 
        @reviews = Review.all 
    end

    def update 
        @review = Review.find_by(id: params[:id]) 

        if @review.reviewer_id == current_user.id && review.update
            redirect_to api_restaurant_url(@review.restaurant_id)
        else 
            render json: { errors: @review.errors.full_messages}, status: 422 
        end

    end

    def destroy 
        @review = Review.find(params[:id])

        if @review && @review.reviewer_id == current_user.id
            @review.destroy
        end
        
        redirect_to api_restaurant_url(@review.restaurant_id)
    end 


    private 

    def review_params
        params.require(:review).permit(:body, :star_rating, :reviewer_id, :restaurant_id)
    end

end