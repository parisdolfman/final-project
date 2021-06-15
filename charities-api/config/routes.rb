Rails.application.routes.draw do
  resources :categories
  resources :charities
  resources :users
  resources :comments
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  post "login" to: "create user"
  post "sign up" to: "create new user"
  

end
