class Api::CartItemsController < ApplicationController
    before_action :require_logged_in

    def create
        @cart_item = current_user.cart_items.build(cart_item_params)

        if @cart_item.save
            render :show
        else
            render json: @cart_item.errors.full_messages, status: 422
        end
    end

    def update
        @cart_item = current_user.cart_items.find_by(id: params[:id])
        return head :not_found unless @cart_item

        if @cart_item.update(cart_item_params)
            render :show
        else
            render json: @cart_item.errors.full_messages, status: 422
        end
    end

    def index
        @cart_items = current_user.cart_items
        render :index
    end

    def destroy
        @cart_item = current_user.cart_items.find_by(id: params[:id])
        return head :not_found unless @cart_item
        @cart_item.destroy
    end

    private

    def cart_item_params
        params.require(:cart_item).permit(:listing_id)
    end
end
