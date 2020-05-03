class RemoveIndex < ActiveRecord::Migration[5.2]
  def change
    remove_index :sneakers, :name
  end
end
