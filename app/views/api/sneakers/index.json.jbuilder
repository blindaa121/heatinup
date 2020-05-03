@sneakers.each do |sneaker|
    json.set! sneaker.id do 
        json.extract! sneaker, :id, :name

        if sneaker.photo.attached? 
            json.photoUrl url_for(sneaker.photo)
        else
            json.photoUrl ""
        end
    end 
end