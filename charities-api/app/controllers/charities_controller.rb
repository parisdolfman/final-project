class CharitiesController < ApplicationController
    before_action :set_charity, only: [:update, :destroy, :show]

    def index
      charities = Charity.all
      users = User.all 
      allcharities = charities.map  do |cha| 
        {id: cha.id, user_id: cha.user_id, image: cha.image, category_id: cha.category_id, name: cha.name, username: cha.user_id ?  users.find_by(id: cha.user_id ).username : 'test user' }
      end
      render json: allcharities
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
        render json: {error: 'Could not create charity'}
      end 
    end 

    def update
      @charity.category = Category.find_by(name: params[:category])
      if @charity.update(charity_params)
        render json: @charity
      else 
        render json: {error: 'Could not update charity'}
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
