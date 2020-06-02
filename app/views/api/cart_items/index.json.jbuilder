json.cart_items do 
    @cart_items.each do |cart_item|
        json.set! cart_item.id do 
            json.extract! cart_item, :id, :user_id, :listing_id
            json.sneakerId cart_item.listing.sneaker.id 
            json.sneakerName cart_item.listing.sneaker.name 
            json.sku cart_item.listing.price 
            json.size cart_item.listing.size 
            if cart_item.listing.sneaker.photo.attached? 
                json.photoUrl url_for(cart_item.listing.sneaker.photo)
            else
                json.photoUrl ""
            end 
        end
    end
end