class Listing < ApplicationRecord
    validates :sneaker_id, presence: true, uniqueness: true 
    validates :size, :price, presence: true 

    belongs_to :sneaker,
        foreign_key: :sneaker_id,
        class_name: :Sneaker

    belongs_to :seller,
        foreign_key: :user_id,
        class_name: :User
end

