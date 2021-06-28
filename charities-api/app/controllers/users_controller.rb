class UsersController < ApplicationController

    def create
      user = User.new(user_params)  
      if user.save
        session[:user_id] = user.id
        render json: user
      else 
        render json: {error: 'Cannot create user'}

    end

    private

    def user_params
        params.permit(:name, :username, :password_digest)

end
