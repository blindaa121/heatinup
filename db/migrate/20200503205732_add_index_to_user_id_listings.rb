class AddIndexToUserIdListings < ActiveRecord::Migration[5.2]
  def change
    add_index :listings, :user_id
  end
end
