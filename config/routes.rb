Rails.application.routes.draw do
    namespace :api, defaults: {format: :json} do 
        resources :users, only: [:create]
        resources :cart_items, only: [:index, :create, :destroy, :update]
        resource :session, only: [:create, :destroy]
        resources :sneakers, only: [:show, :index] do
            resources :listings, only: [:show, :index, :destroy, :update]
            resources :reviews, only: [:show, :index, :destroy, :update, :create]
        end
    end
    root to: "static_pages#root"
end
