class Api::ReviewsController < ApplicationController
    def create
        @review = Review.new(review_params)

        if @review.save 
            render :show
        else 
            render json: @review.errors.full_messages, status: 422
        end
    end 

    def index 
        @reviews = sneaker.reviews 
        render :index
    end 

    def show 
        @review = Review.find_by(id: params[:id]);
        render :show
    end 

    def update 
        
    end 

    def destroy 
        @review = Review.find_by(id: params[:id])
        @review.destroy
    end 

    private 

    def review_params 
        params.require(:review).permit(:user_id, :sneaker_id, :review_text)
    end 
end
