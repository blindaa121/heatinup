class Api::SneakersController < ApplicationController

    def show 
        @sneaker = Sneaker.find_by(id: params[:id])
        render :show
    end

    def index 
        @sneakers = Sneaker.all 
        render :index
    end
end
