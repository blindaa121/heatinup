json.partial! "api/sneakers/sneaker", sneaker: @sneaker


json.listings do
  @sneaker.listings.each do |listing|
    json.set! listing.id do
      json.extract! listing, :id, :sneaker_id, :size, :price
    end
  end
end

json.reviews do 
  @sneaker.reviews.each do |review|
    json.set! review.id do 
      json.extract! review, :id, :sneaker_id, :user_id 
    end 
  end 
end