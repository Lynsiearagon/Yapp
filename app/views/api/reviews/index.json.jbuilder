@reviews.each do |review|
    json.set! review.id do 
        json.extract! review, 
        :id, 
        :body, 
        :star_rating, 
        :reviewer_id, 
        :restaurant_id,
        :created_at,
        :updated_at
    end
end