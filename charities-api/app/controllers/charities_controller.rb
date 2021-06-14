class CharitiesController < ApplicationController
    before_action :set_charity, only: [:update, :destroy, :show]

    def index
        charities = Charity.all
        render json: charities
    end
    
    def show
      render json: @charity, serializer: CharityShowSerializer
    end
    
    def create
      charity = current_user.charity.build(charity_params)
      charity.category = Category.find_or_create_by(name: params[:category])
      if charity.save
        render json: charity
      else 
        error = {
            #error message here
        }
        render json: error
      end 
    end 

    def update
      @charity.category = Category.find_by(name: params[:category])
      if @charity.update(charity_params)
        render json: @charity
      else 
        error = {
            #error message here
        }
        render json: error 
      end 
    end 

    def destroy 
      @charity.destroy
      render json: {notice: 'Charity deleted'}
    end 

    private
    def set_charity
      @charity = Charity.find_by(id: params[:id])
    end

    def charity_params
      params.require(:charity).permit(:name, :image)
    end 

end
