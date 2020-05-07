class CreateCarts < ActiveRecord::Migration[5.2]
  def change
    create_table :carts do |t|
      t.integer :user_id, null: false
      t.integer :listing_id, null: false 
      t.timestamps
      t.index [:user_id], unique: true
      t.index [:listing_id], unique: true
    end
  end
end
