class Api::CartItemsController < ApplicationController

    def create
        @cart_item = CartItem.new(cart_item_params)

        if @cart_item.save
            render :show
        else
            render json: @cart_item.errors.full_messages, status: 422
        end 
    end 

    def update 
        @cart_item = CartItem.find_by(id: params[:id])

        if @cart_item.update(cart_item_params)
            render :show
        else
            render json: @report.errors.full_messages, status: 422
        end
    end

    def index 
        @cart_items = current_user.cart_items
        render :index
    end 

    def destroy 
        @cart_item = CartItem.find_by(id: params[:id])
        @cart_item.destroy 
    end 

    private 

    def cart_item_params 
        params.require(:cart_item).permit(:user_id, :listing_id)
    end 

end
