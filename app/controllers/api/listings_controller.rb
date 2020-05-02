class Api::ListingsController < ApplicationController
    def create 

    end 

    def destroy 

    end 

    def show 
        @listing = Listing.find_by(id: params[:id])
        render :show
    end 

    def index 
        @listings = Sneaker.find_by(id: params[:sneaker_id]).listings
        render :index
    end 

    private 

    def listing_params
        params.require(:listing).permit(:size, :price, :sneaker_id, :user_id)
    end
end
