class Api::UsersController < ApplicationController

  wrap_parameters include: User.attribute_names + ["password"]

  # before_action :require_logged_in, only: [:update, :show]
  # before_action :require_logged_out, only: [:create]

  def create
    @user = User.new(user_params)

    if @user.save
      login!(@user)
      render json: @user
    else 
      render json: { errors: @user.errors.full_messages }, status: 422
    end
  end
  
  def show
    @user = User.find_by(id: params[:id])

    if @user 
      render json: @user
    else 
      render json: { errors: @user.full_messages }, status: 422
    end 
  end 

  def update
    @user = User.find_by(email: :email)

    if @user.save!
      render @user
    else 
      render json: { errors: @user.errors.full_messages }, status: 422
    end 
  end


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

# signupRequestOptions = {
#   method: 'POST',
#   headers: { 'Content-Type': 'application/json' },
#   body: JSON.stringify({ 
#     email: 'coolemail@hotmail.net', 
#     first_name: 'cooluser',
#     last_name: 'mckool',
#     password: 'starwars',
#     zipcode: '78613'
#   })
# }