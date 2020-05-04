class RemoveUniqueSneakerIdListings < ActiveRecord::Migration[5.2]
  def change
    remove_index :listings, :sneaker_id
  end
end
