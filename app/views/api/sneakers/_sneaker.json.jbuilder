json.extract! sneaker, :id, :name, :description, :release_date, :sku, :brand, :upper_material, :main_color, :colorway, :designer, :silhouette, :technology, :category
    if sneaker.photo.attached? 
        json.photoUrl url_for(sneaker.photo)
    else
        json.photoUrl ""
    end