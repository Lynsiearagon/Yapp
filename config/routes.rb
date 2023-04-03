Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  # post 'api/test', to: 'application#test'

  namespace :api, defaults: { format: :json } do 
    resources :users, only: [:create]
    resource :session, only: [:create, :show, :destroy]
    resources :restaurants, only: [:index, :show]
    resources :reviews, only: [:create, :index, :update, :destroy]
  end

  # get '/api/reviews/restaurants/:restaurant_id', to: "api/reviews#restaurant_reviews_index"
  # get '/api/reviews', to: "api/reviews#all_reviews"
  get '*path', to: "static_pages#frontend_index"

end
