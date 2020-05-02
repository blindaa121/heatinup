class Sneaker < ApplicationRecord
    validates :description, :release_date,  :brand, :upper_material, :main_color, presence: true
    validates :colorway, :designer, :silhouette, :technology, :category, presence: true
    validates :name, :sku, presence: true, uniqueness: true

    has_one_attached :photo

    has_many :listings,
        foreign_key: :sneaker_id,
        class_name: 'Listing'
end