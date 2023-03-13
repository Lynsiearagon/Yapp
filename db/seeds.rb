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
    User.destroy_all
    Restaurant.destroy_all
  
    puts "Resetting primary keys..."
    # For easy testing, so that after seeding, the first `User` has `id` of 1
    ApplicationRecord.connection.reset_pk_sequence!('users')
    ApplicationRecord.connection.reset_pk_sequence!('restaurants')
  
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
      email: 'maggie@goodestgirl.com',
      zipcode: '11375',
      password: 'woofwoof'
    )

    User.create!(
      first_name: 'Lynsie', 
      last_name: 'Aragon', 
      email: 'lynsie@gmail.com',
      zipcode: '11375',
      password: 'engineer!'
    )

    puts "Creating restaurants..."

    Restaurant.create!(
      restaurant_name: 'Llama San',
      cuisine: 'Japanese, Peruvian',
      price: '$$$$',
      neighborhood: 'Greenwich Village',
      opening_hours: '5:00 PM',
      closing_hours: '11:00 PM',
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
        "Monday": "5:00 PM - 11:00 PM",
        "Tuesday": "5:00 PM - 11:00 PM",
        "Wednesday": "5:00 PM - 11:00 PM",
        "Thursday": "5:00 PM - 11:00 PM",
        "Friday": "5:00 PM - 11:00 PM",
        "Saturday": "5:00 PM - 11:00 PM",
        "Sunday": "5:00 PM - 11:00 PM",
      }'
    )

    Restaurant.create!(
      restaurant_name: 'ABC Cocina',
      cuisine: 'Tapas/Small Plates, Cocktail Bars, Spanish',
      price: '$$$',
      neighborhood: 'Flatiron',
      opening_hours: '5:00 PM',
      closing_hours: '11:00 PM',
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
        "Monday": "5:00 PM - 10:00 PM",
        "Tuesday": "5:00 PM - 10:00 PM",
        "Wednesday": "5:00 PM - 10:00 PM",
        "Thursday": "5:00 PM - 10:00 PM",
        "Friday": "5:00 PM - 10:00 PM",
        "Saturday": "11:00 AM - 3:00 PM, 5:00 PM - 10:00 PM",
        "Sunday": "11:00 AM - 3:00 PM, 5:00 PM - 10:00 PM",
      }'
    )

    Restaurant.create!(
      restaurant_name: "Patti Ann's",
      cuisine: 'American (New), Desserts, Cocktail Bars',
      price: '$$$',
      neighborhood: 'Prospect Heights',
      opening_hours: '8:00 AM',
      closing_hours: '10:00 PM',
      photo_url: '',
      amenities: 'Health Score A, Moderate Noise, Gender-neutral restrooms',
      phone_number: '(212) 475-5829',
      website_link: 'https://www.pattianns.com/',
      about_restaurant: '(###) ###-####',
      street_address: '570 Vanderbilt Ave',
      city: 'Brooklyn',
      zipcode: '11238',
      state: 'NY',
      country: 'United States',
      menu_link: '',
      latitude: 40.68183280924385,
      longitude: -73.96851428138494,
      hours: '{
        "Monday": "Closed",
        "Tuesday": "Closed",
        "Wednesday": "8:00 AM - 10:00 PM",
        "Thursday": "8:00 AM - 10:00 PM",
        "Friday": "8:00 AM - 10:00 PM",
        "Saturday": "8:00 AM - 10:00 PM",
        "Sunday": "8:00 AM - 10:00 PM",
      }'
    )

    puts "Done!"
  end