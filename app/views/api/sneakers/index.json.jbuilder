@sneakers.each do |sneaker|
    json.set! sneaker.id do
        json.extract! sneaker, :id, :name, :brand, :silhouette, :category
        json.minPrice @min_prices[sneaker.id]

        if sneaker.photo.attached?
            json.photoUrl url_for(sneaker.photo)
        else
            json.photoUrl ""
        end
    end
end
