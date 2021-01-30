@reviews.each do |review|
    json.set! review.id do 
        json.extract! review, :id, :user_id, :sneaker_id, :review_text
        json.username review.user.username
        json.date review[:created_at]
    end
end