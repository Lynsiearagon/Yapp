# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
ApplicationRecord.transaction do 
    puts "Destroying tables..."
    # Unnecessary if using `rails db:seed:replant`
    Review.destroy_all
    Restaurant.destroy_all
    User.destroy_all
  
    puts "Resetting primary keys..."
    # For easy testing, so that after seeding, the first `User` has `id` of 1
    ApplicationRecord.connection.reset_pk_sequence!('users')
    ApplicationRecord.connection.reset_pk_sequence!('restaurants')
    ApplicationRecord.connection.reset_pk_sequence!('reviews')
  
    puts "Creating users..."
    # Create one user with an easy to remember username, email, and password:
    User.create!(
      first_name: 'Demo', 
      last_name: 'User', 
      email: 'demo@user.io',
      zipcode: '10011',
      password: 'password'
    )

    User.create!(
      first_name: 'Maggie', 
      last_name: 'Aragon', 
      email: 'maggie@email.com',
      zipcode: '11375',
      password: 'woofwoof'
    )

    User.create!(
      first_name: 'Lynsie', 
      last_name: 'Aragon', 
      email: 'lynsie@email.com',
      zipcode: '11375',
      password: 'engineer!'
    )

    puts "Creating restaurants..."

    Restaurant.create!(
      restaurant_name: 'Llama San',
      cuisine: 'Japanese, Peruvian',
      price: '$$$$',
      neighborhood: 'Greenwich Village',
      photo_url: '',
      amenities: 'Outdoor seating, Delivery, Takeout',
      phone_number: '(646) 490-4422',
      website_link: 'http://llamasannyc.com',
      about_restaurant: "History Established in 2019. Llama -San represents Chef Erik Ramirez and Team's efforts to capture the immense and invaluable influence that Japanese culture and cuisine has historically had and continues to have in Peruvian cuisine. The first-generation Peruvian-American Ramirez will use it to showcase an aspect of Peruvian gastronomy that's seldom exported elsewhere: Nikkei, the culinary consequence of Japanese immigration.",
      street_address: '359 6th Ave',
      city: 'New York',
      zipcode: '10014',
      state: 'NY',
      country: 'United States',
      menu_link: '',
      latitude: 40.732440744472804,
      longitude: -74.00085076556799,
      hours: '{
        "Mon:  5:00 PM - 11:00 PM",
        "Tue:  5:00 PM - 11:00 PM",
        "Wed:  5:00 PM - 11:00 PM",
        "Thu:  5:00 PM - 11:00 PM",
        "Fri:  5:00 PM - 11:00 PM",
        "Sat:  5:00 PM - 11:00 PM",
        "Sun:  5:00 PM - 11:00 PM"
      }',
      overall_rating: 0,
      total_num_reviews: 0, 
      total_five_star_reviews: 0,
      total_four_star_reviews: 0,
      total_three_star_reviews: 0,
      total_two_star_reviews: 0,
      total_one_star_reviews: 0
    )

    Restaurant.create!(
      restaurant_name: 'ABC Cocina',
      cuisine: 'Tapas/Small Plates, Cocktail Bars, Spanish',
      price: '$$$',
      neighborhood: 'Flatiron',
      photo_url: '',
      amenities: 'Outdoor seating, Delivery, Takeout',
      phone_number: '(212) 475-5829',
      website_link: 'https://www.abchome.com',
      about_restaurant: '',
      street_address: '38 E 19th St',
      city: 'New York',
      zipcode: '10003',
      state: 'NY',
      country: 'United States',
      menu_link: 'https://qrcodes.pro/0Fgx7a',
      latitude: 40.73799902299168,
      longitude: -73.98927563702115,
      hours: '{
        "Mon:  5:00 PM - 10:00 PM",
        "Tue:  5:00 PM - 10:00 PM",
        "Wed:  5:00 PM - 10:00 PM",
        "Thu:  5:00 PM - 10:00 PM",
        "Fri:  5:00 PM - 10:00 PM",
        "Sat:  11:00 AM - 10:00 PM",
        "Sun:  11:00 AM - 10:00 PM"
      }',
      overall_rating: 5,
      total_num_reviews: 1, 
      total_five_star_reviews: 1,
      total_four_star_reviews: 0,
      total_three_star_reviews: 0,
      total_two_star_reviews: 0,
      total_one_star_reviews: 0
    )

    Restaurant.create!(
      restaurant_name: "Patti Ann's",
      cuisine: 'American (New), Desserts, Cocktail Bars',
      price: '$$$',
      neighborhood: 'Prospect Heights',
      photo_url: '',
      amenities: 'Health Score A, Moderate Noise, Gender-neutral restrooms',
      phone_number: '(###) ###-####',
      website_link: 'https://www.pattianns.com/',
      about_restaurant: '',
      street_address: '570 Vanderbilt Ave',
      city: 'Brooklyn',
      zipcode: '11238',
      state: 'NY',
      country: 'United States',
      menu_link: '',
      latitude: 40.68183280924385,
      longitude: -73.96851428138494,
      hours: '{
        "Mon:  8:00 AM - 10:00 PM",
        "Tue:  8:00 AM - 10:00 PM",
        "Wed:  8:00 AM - 10:00 PM",
        "Thu:  8:00 AM - 10:00 PM",
        "Fri:  8:00 AM - 10:00 PM",
        "Sat:  8:00 AM - 10:00 PM",
        "Sun:  8:00 AM - 10:00 PM"
      }',
      overall_rating: 4,
      total_num_reviews: 1, 
      total_five_star_reviews: 0,
      total_four_star_reviews: 1,
      total_three_star_reviews: 0,
      total_two_star_reviews: 0,
      total_one_star_reviews: 0
    )

    puts 'Creating Reviews...'

    Review.create!(
      reviewer_id: 2,
      reviewer_first_name: "Maggie",
      reviewer_last_name: "Aragon",
      restaurant_id: 3, 
      star_rating: 4, 
      body: "Woof woof woof woof woof woof woof woof woof woof Woof woof 
      woof woof woof woof woof woof woof woof Woof woof woof woof woof woof 
      woof woof woof woof Woof woof woof woof woof woof woof woof woof woof 
      Woof woof woof woof woof woof woof woof woof woof Woof woof woof woof 
      woof woof woof woof woof woof Woof woof woof woof woof woof woof woof"
    )

    Review.create!(
      reviewer_id: 3,
      reviewer_first_name: "Lynsie",
      reviewer_last_name: "Aragon",
      restaurant_id: 2, 
      star_rating: 5, 
      body: "One of my favorite places to eat in the city. The food, drinks, and 
      environment are all great! I ordered the Octopus, Guacamole, Mushroom Empanadas 
      with green chili mayo, and the Shrimp with sizzling garlic, chili oil. I can't wait to go back! "
    )

    puts "Done!"
  end