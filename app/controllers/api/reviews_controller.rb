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
        sneaker = Sneaker.find(params[:sneaker_id])
        @reviews = sneaker.reviews 
        @authors = User.all
        render :index
    end 

    def show 
        @review = Review.find_by(id: params[:id])
        render :show
    end 

    def update 
        @review = Review.find_by(id: params[:id])
        if (@review.user_id == current_user().id) && @review.update(review_params)
            render :show 
        else 
            render json: @review.errors.full_messages, status: 422
        end
    end 

    def destroy 
        @review = Review.find_by(id: params[:id])
        if (@review.user_id == current_user.id) && @review.destroy
            render json: @review
        else 
            render json: ["Unauthorized request"], status: 422
        end
    end 

    private 

    def review_params 
        params.require(:review).permit(:user_id, :sneaker_id, :review_text)
    end 
end
