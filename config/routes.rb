Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  post '/auth/login', to: 'authentication#login'
  
  resources :users 
  resources  :stays do
    resources :reviews
  end

 end
