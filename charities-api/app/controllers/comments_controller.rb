class CommentsController < ApplicationController
    before_action :set_comment, only: [:update, :destroy]

    def index
      comments = Comment.all
      render json: comments
    end

    def create
      comment = current_user.comments.build(comment_params)
      if comment.save
        render json: comment
      else 
        render json: {error: 'Creation unsuccessful'}
      end 
    end

    def update 
      charity = @comment.charity
      if @comment.update(description: params[:description])
        render json: charity, serializer: CharityShowSerializer 
      else 
        render json: {error: 'Update unsuccessful'}
      end 
    end 

    def destroy
      charity = @comment.charity
      if @comment.destroy 
        render json: charity, serializer: CharityShowSerializer
      else 
        render json: {error: 'Could not delete comment'}
      end 
    end 

    private
    
    def set_comment
      @comment = Comment.find_by(id: params[:id])
    end
    
    def comment_params
      params.permit(:description)
    end 
    

end
