class Api::ReviewsController < ApplicationController
    before_action :require_logged_in, only: [:create, :update, :destroy]

    def create
        @review = current_user.reviews.build(review_params.merge(sneaker_id: params[:sneaker_id]))

        if @review.save
            render :show
        else
            render json: @review.errors.full_messages, status: 422
        end
    end

    def index
        sneaker = Sneaker.find_by(id: params[:sneaker_id])
        return head :not_found unless sneaker
        @reviews = sneaker.reviews
        @authors = User.where(id: @reviews.select(:user_id))
        render :index
    end

    def show
        @review = Review.find_by(id: params[:id])
        return head :not_found unless @review
        render :show
    end

    def update
        @review = Review.find_by(id: params[:id])
        return head :not_found unless @review
        return head :forbidden unless @review.user_id == current_user.id

        if @review.update(review_params)
            render :show
        else
            render json: @review.errors.full_messages, status: 422
        end
    end

    def destroy
        @review = Review.find_by(id: params[:id])
        return head :not_found unless @review
        return head :forbidden unless @review.user_id == current_user.id

        @review.destroy
        render json: @review
    end

    private

    def review_params
        params.require(:review).permit(:review_text)
    end
end
