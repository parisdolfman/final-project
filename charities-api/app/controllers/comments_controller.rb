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
        error = {
            #error message
        }
        render json: error
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
    
    

end
