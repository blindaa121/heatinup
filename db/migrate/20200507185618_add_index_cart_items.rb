class AddIndexCartItems < ActiveRecord::Migration[5.2]
  def change
    add_index :cart_items, :user_id
    add_index :cart_items, :listing_id
  end
end
