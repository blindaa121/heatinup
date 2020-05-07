Rails.application.routes.draw do
    namespace :api, defaults: {format: :json} do 
        resource :user, only: [:create]
            resources :cart_items, only: [:create, :index]
        resource :session, only: [:create, :destroy]
        resources :sneakers, only: [:show, :index] do
            resources :listings, only: [:show, :index, :destroy, :create]
        end
    end
    root to: "static_pages#root"
end
