@listings.each do |listing|
    json.set! listing.id do 
        json.extract! listing, :id, :sneaker_id, :size, :price
    end 
end