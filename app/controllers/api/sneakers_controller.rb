class Api::SneakersController < ApplicationController
    def show
        @sneaker = Sneaker.find_by(id: params[:id])
        return head :not_found unless @sneaker
        render :show
    end

    def index
        @sneakers = Sneaker.includes(photo_attachment: :blob).all
        @min_prices = Listing.group(:sneaker_id).minimum(:price)
        render :index
    end
end
