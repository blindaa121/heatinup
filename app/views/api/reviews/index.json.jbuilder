@reviews.each do |review|
    json.set! review.id do 
        json.extract! review, :id, :user_id, :sneaker_id
    end
end