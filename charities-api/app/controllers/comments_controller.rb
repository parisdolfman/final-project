class CommentsController < ApplicationController
  before_action :set_comment, only: [:update, :destroy]

  def index
    comments = Comment.all
    users = User.all
    newComments = comments.map do |ele| 
     
        { id: ele.id, user_id: ele.user_id, description: ele.description, charity_id: ele.charity_id  ,username: ele.user_id ?  users.find_by(id: ele.user_id ).username : 'test user' }
    end

    render json: newComments
  end

  def create
    charity = Charity.find_by(id: params[:charity_id])
    comment = charity.comments.build(comment_params)
    if comment.save
      render json: comment
    else 
      render json: {error: 'Creation unsuccessful'}, status: 403
    end 
  end

  def update 
    p params
    p '____-----___-'
    comment = Comment.find_by(id: params[:id])
    if comment.update(description: params[:description])
      render json: comment
    else 
      render json: {error: 'Update unsuccessful'}, status: 403
    end 
  end 

  

  def destroy
    comment = Comment.find_by(id: params[:id])
    comment.destroy
    render json: {msg: 'Comment Removed'}
  
  end 

  private
  
  def set_comment
    @comment = Comment.find_by(id: params[:id])
  end
  
  def comment_params
    params.permit(:description, :user_id)
  end 
  

end
