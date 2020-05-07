Rails.application.routes.draw do
    namespace :api, defaults: {format: :json} do 
        resources :users, only: [:create] do
            resources :cart_items, only: [:create, :index]
        end 
        resources :cart_items, only: [:destroy]
        resource :session, only: [:create, :destroy]
        resources :sneakers, only: [:show, :index] do
            resources :listings, only: [:show, :index, :destroy, :create]
        end
    end
    root to: "static_pages#root"
end
