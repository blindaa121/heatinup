class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.integer :user_id, null: false
      t.integer :sneaker_id, null: false
      t.text :review_text, null: false
      t.index [:user_id], unique: true
      t.index [:sneaker_id], unique: true
      t.timestamps
    end
  end
end
