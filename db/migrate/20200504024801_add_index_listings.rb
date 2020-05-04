class AddIndexListings < ActiveRecord::Migration[5.2]
  def change
    add_index :listings, :sneaker_id
  end
end
