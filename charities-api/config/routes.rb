Rails.application.routes.draw do
  resources :categories, only: [:index]
  resources :charities, only: [:index, :show, :create, :update, :destroy]
  resources :users, only: [:create]
  resources :comments, only: [:index, :create, :update, :destroy]
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  post "/login", to: "sessions#create"
  post "/signup", to: "users#create"
  delete "/logout", to: "sessions#destroy"
  get "/get_current_user", to: "sessions#get_current_user"

end
