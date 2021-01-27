class Review < ApplicationRecord
    validates :user_id, :sneaker_id, :review_text, presence: true

    belongs_to :sneaker,
        foreign_key: :sneaker_id,
        class_name: :Sneaker

    belongs_to :user,
        foreign_key: :user_id,
        class_name: :User
end
