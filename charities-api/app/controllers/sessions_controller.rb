class SessionsController < ApplicationController
    
    def create
        user = User.find_by(username: params[:session][:username])
        if user && user.authenticate(params[:session][:password])
            session[:user_id] = user.id
            render json: user
        else 
            render json: {error: "Incorrect username or password"}
        end 
    end 

    def get_current_user
      if logged_in?
        render json: current_user
      else
        render json: {error: "You are not currently logged in"}
    end 

    def destroy
      session.delete :username
      if !session[:user_id]
        render json: {notice: "Log out successful"}
      else
        render json: {error: "You have not logged out"}
      end 
    end 
    
end
