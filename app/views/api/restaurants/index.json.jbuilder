@restaurants.each do |restaurant| 
    json.set! restaurant.id do 
        json.extract! restaurant, 
            :id, 
            :restaurant_name, 
            :cuisine, 
            :price, 
            :neighborhood, 
            :opening_hours,
            :closing_hours,
            :hours,
            :photo_url, 
            :amenities,
            :updated_at, 
            :created_at
    end
end