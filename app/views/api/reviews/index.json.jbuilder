@reviews.each do |review|
    json.set! review.id do 
        json.extract! review, 
        :id, 
        :body, 
        :star_rating, 
        :reviewer_id, 
        :reviewer_first_name,
        :reviewer_last_name,
        :restaurant_id,
        :created_at,
        :updated_at
    end
end