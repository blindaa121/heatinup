class RemoveIndexCartItems < ActiveRecord::Migration[5.2]
  def change
    remove_index :cart_items, :user_id
    remove_index :cart_items, :listing_id
  end
end
