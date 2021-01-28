class RemoveIndexToReviews < ActiveRecord::Migration[5.2]
  def change
    remove_index :reviews, :user_id
    remove_index :reviews, :sneaker_id
  end
end
