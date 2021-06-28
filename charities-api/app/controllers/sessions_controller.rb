class SessionsController < ApplicationController
    
  def create
    user = User.find_by(username: params[:session][:username])
    if user && user.password_digest === params[:session][:password_digest]
        session[:user_id] = user.id
        render json: user
    else 
        render json: {error: "Incorrect username or password"}, status: 403
    end 
end 

def get_current_user
  if logged_in?
    render json: current_user
  else
    render json: {error: "You are not currently logged in"}, status: 403
  end
end 

def destroy
  session.delete :user_id
  if !session[:user_id]
    render json: {notice: "Log out successful"}
  else
    render json: {error: "You have not logged out"}, status: 403
  end 
end 


end
