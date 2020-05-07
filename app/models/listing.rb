class Listing < ApplicationRecord
    validates :sneaker_id, :size, :price, presence: true

    belongs_to :sneaker,
        foreign_key: :sneaker_id,
        class_name: :Sneaker

    belongs_to :seller,
        foreign_key: :user_id,
        class_name: :User

    has_many :cart_items,
        foreign_key: :listing_id,
        class_name: :CartItem
end

