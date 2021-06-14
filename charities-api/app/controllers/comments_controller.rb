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
    
    

end
