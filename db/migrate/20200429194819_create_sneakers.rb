class CreateSneakers < ActiveRecord::Migration[5.2]
  def change
    create_table :sneakers do |t|
      t.string :name, null: false
      t.text :description, null: false
      t.date :release_date, null: false
      t.string :sku, null: false
      t.string :brand, null: false
      t.string :upper_material, null: false
      t.string :main_color, null: false
      t.string :colorway, null: false
      t.string :designer, null: false
      t.string :silhouette, null: false
      t.string :technology, null: false
      t.string :category, null: false

      t.timestamps
    end
    add_index :sneakers, :name, unique: true
    add_index :sneakers, :sku, unique: true
    add_index :sneakers, :release_date
    add_index :sneakers, :brand
    add_index :sneakers, :designer
    add_index :sneakers, :silhouette
    add_index :sneakers, :technology
    add_index :sneakers, :category
  end
end
