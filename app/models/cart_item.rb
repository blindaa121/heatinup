class CartItem < ApplicationRecord
    validates :user_id, :listing_id, presence: true

    belongs_to :listing,
        foreign_key: :listing_id,
        class_name: :Listing

    belongs_to :user,
        foreign_key: :user_id,
        class_name: :User

end
