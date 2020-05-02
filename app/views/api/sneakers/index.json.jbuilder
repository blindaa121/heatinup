@sneakers.each do |sneaker|
    json.set! sneaker.id do 
        json.extract! sneaker, :id, :name
        json.photo url_for(sneaker.photo)
    end 
end