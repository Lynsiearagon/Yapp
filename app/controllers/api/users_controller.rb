class Api::UsersController < ApplicationController

  wrap_parameters include: User.attribute_names + ["password"]

  # before_action :require_logged_in, only: [:update, :show]
  # before_action :require_logged_out, only: [:create]

  def create
    @user = User.new(user_params)
    
    debugger

    if @user.save
      login!(@user)
      render :show
    else 
      render json: { errors: @user.errors.full_messages }, status: 422
    end
  end
  
  # def show
  #   @user = User.find(params[:id])
  #   render json: @user 
  # end 

  # def update
  #   @user = User.find_by(email: :email)

  #   if @user.save!
  #     render :show
  #   else 
  #     render json: { errors: @user.errors.full_messages }, status: 422
  #   end 
  # end


  private 

  def user_params
    params.require(:user).permit(
      :first_name, 
      :last_name,
      :email, 
      :password,
      :zipcode,
      :birthday
    )
  end

end
