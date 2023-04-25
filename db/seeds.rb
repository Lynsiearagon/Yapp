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

    # User 1
    User.create!(
      first_name: 'Demo', 
      last_name: 'User', 
      email: 'demo@user.io',
      zipcode: '10011',
      password: 'password'
    )

    # User 2
    User.create!(
      first_name: 'Maggie', 
      last_name: 'Aragon', 
      email: 'maggie@email.com',
      zipcode: '11375',
      password: 'woofwoof'
    )

    # User 3
    User.create!(
      first_name: 'Lynsie', 
      last_name: 'Aragon', 
      email: 'lynsie@email.com',
      zipcode: '11375',
      password: 'engineer!'
    )



    puts "Creating restaurants..."

    # Restaurant 1
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

    # Restaurant 2
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

    # Restaurant 3
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

    # Restaurant 4
    Restaurant.create!(
      restaurant_name: "District Local",
      cuisine: "Tapas/Small Plates, Burgers, Cocktail Bars",
      price: "$$",
      neighborhood: "Chelsea",
      photo_url: '',
      amenities: "Delivery, Takeout",
      phone_number: "(212) 930-6677",
      website_link: "https://www.districtlocalnyc.com/",
      about_restaurant: "District Local is a seasonal small plates tapas restaurant with a large selection of craft beers and curated cocktails and wine.",
      street_address: "72 7th Ave",
      city: "New York",
      zipcode: "10011",
      state: "NY",
      country: "United States",
      menu_link: "https://www.districtlocalnyc.com/menus/",
      latitude: 40.73931075352384,
      longitude: -73.99952273240291,
      hours: '{
        "Mon:   4:00 PM - 1:00 AM",
        "Tue:   4:00 PM - 1:00 AM",
        "Wed:   4:00 PM - 2:00 AM",
        "Thu:   4:00 PM - 2:00 AM",
        "Fri:   4:00 PM - 2:00 AM",
        "Sat:  12:00 PM - 2:00 AM",
        "Sun:  12:00 PM - 12:00 AM"
      }',
      overall_rating: 0,
      total_num_reviews: 0, 
      total_five_star_reviews: 0,
      total_four_star_reviews: 0,
      total_three_star_reviews: 0,
      total_two_star_reviews: 0,
      total_one_star_reviews: 0
    )

    # Restaurant 5
    Restaurant.create!(
      restaurant_name: "Tartine",
      cuisine: "French",
      price: "$$",
      neighborhood: "West Village",
      photo_url: '',
      amenities: "Outdoor seating, Delivery, Takeout",
      phone_number: "(212) 229-2611",
      website_link: "http://www.tartine.nyc",
      about_restaurant: "",
      street_address: "253 W 11th Street",
      city: "New York",
      zipcode: "10014",
      state: "NY",
      country: "United States",
      menu_link: "History: Established in 1992. Tartine Restaurant opened in January of 1992, located on the corner of West 4th Street and West 11th Street. Tartine is open for Brunch on Saturdays & Sundays, Lunch on Wednesday, Thursday & Friday, and Dinner Tuesday thru Saturday",
      latitude: 40.7371981906184, 
      longitude: -74.00326921604898,
      hours: '{
        "Mon:  Closed",
        "Tue:  5:30 PM - 10:30 PM",
        "Wed:  11:30 AM - 10:30 PM",
        "Thu:  11:30 AM - 10:30 PM",
        "Fri:  11:30 AM - 10:30 PM",
        "Sat:  11:00 AM - 10:30 PM",
        "Sun:  11:00 AM - 4:00 PM"
      }',
      overall_rating: 0,
      total_num_reviews: 0, 
      total_five_star_reviews: 0,
      total_four_star_reviews: 0,
      total_three_star_reviews: 0,
      total_two_star_reviews: 0,
      total_one_star_reviews: 0
    )

    # Restaurant 6
    Restaurant.create!(
      restaurant_name: "Seamore's - Chelsea",
      cuisine: "Seafood, Breakfast & Brunch, Cocktail Bars",
      price: "$$",
      neighborhood: "Chelsea",
      photo_url: '',
      amenities: "Outdoor seating, delivery, Takeout",
      phone_number: "(212) 597-9222",
      website_link: "https://www.seamores.com",
      about_restaurant: "History: Established in 2015. From the joy of fishing and the taste of fresh catch, we bring Montauk to your sidewalk. Founded by Michael Chernow and Jay Wainwright in 2015 on the corner of Broome and Mulberry, Seamore's put the local back into seafood & the opening of Seamore's Chelsea quickly followed. With healthy plates, beach vibes, affordable local seafood, and sustainability at our core, we want you to feel good about your fish. We aim to make fresh, local fish more accessible to New Yorkers and sustainability more accessible to everyone. Our seafood is sustainably caught or farmed and sourced as close to home as possible. We're surrounded by water after all! Built on the dish not the fish, we aim to ebb and flow with our oceans, so you can enjoy the whole menu knowing it's freshness and flavor will never change - even when our daily landings do.",
      street_address: "161 8th Ave",
      city: "New York",
      zipcode: "10011",
      state: "NY",
      country: "United States",
      menu_link: "https://www.seamores.com/chelsea-menus/",
      latitude: 40.74261345931638, 
      longitude: -74.00095444774726,
      hours: '{
        "Mon:  12:00 PM - 10:00 PM",
        "Tue:  12:00 PM - 10:00 PM",
        "Wed:  12:00 PM - 10:00 PM",
        "Thu:  12:00 PM - 10:00 PM",
        "Fri:  12:00 PM - 11:00 PM",
        "Sat:  12:00 PM - 11:00 PM",
        "Sun:  12:00 PM - 10:00 PM"
      }',
      overall_rating: 0,
      total_num_reviews: 0, 
      total_five_star_reviews: 0,
      total_four_star_reviews: 0,
      total_three_star_reviews: 0,
      total_two_star_reviews: 0,
      total_one_star_reviews: 0
    )

    # Restaurant 7
    Restaurant.create!(
      restaurant_name: "Le Cafe Coffee",
      cuisine: "Coffee & Tea, Bakeries",
      price: "$",
      neighborhood: "Union Square",
      photo_url: '',
      amenities: "Delivery, Takeout",
      phone_number: "(212) 365-1060",
      website_link: "http://www.lecafecoffee.com/",
      about_restaurant: "Specialties: Premium Coffee, Organic Coffee , Freshly Baked Sandwiches , Daily prepared Pastries (Croissants, Macarons, Donuts) , Flat White ,Lavender Lattes, Rose Latte , Pumpkin Spice Latte, Hot Chocolate , Coffee Beans , Gluten-Free Products, Vegan Products, Organic Turkey Avocado , Ibitefood Sandwich , Almond Milk, Fresh Salmon",
      street_address: "7 E 14th St",
      city: "New York",
      zipcode: "10003",
      state: "NY",
      country: "United States",
      menu_link: "https://www.lecafecoffee.com/",
      latitude: 40.73593060272806,
      longitude: -73.99272570356695,
      hours: '{
        "Mon:  7:00 AM - 6:30 PM",
        "Tue:  7:00 AM - 6:30 PM",
        "Wed:  7:00 AM - 6:30 PM",
        "Thu:  7:00 AM - 6:30 PM",
        "Fri:  7:00 AM - 7:00 PM",
        "Sat:  8:00 AM - 5:00 PM",
        "Sun:  8:00 AM - 5:00 PM"
      }',
      overall_rating: 0,
      total_num_reviews: 0, 
      total_five_star_reviews: 0,
      total_four_star_reviews: 0,
      total_three_star_reviews: 0,
      total_two_star_reviews: 0,
      total_one_star_reviews: 0
    )

    # Restaurant 8
    Restaurant.create!(
      restaurant_name: "Union Square Cafe",
      cuisine: "American (New), Cafes, Bars",
      price: "$$$",
      neighborhood: "Union Square",
      photo_url: '',
      amenities: "Outdoor seating",
      phone_number: "(212) 243-4020",
      website_link: "http://www.unionsquarecafe.com",
      about_restaurant: '',
      street_address: '101 E 19th St',
      city: "New York",
      zipcode: "10003",
      state: "NY",
      country: "United States",
      menu_link: "https://www.unionsquarecafe.com/menus/#chalkboard-menu",
      latitude: 40.737965273944766,
      longitude: -73.9879088900752,
      hours: '{
        "Mon:  11:30 AM - 11:00 PM",
        "Tue:  11:30 AM - 11:00 PM",
        "Wed:  11:30 AM - 11:00 PM",
        "Thu:  11:30 AM - 11:00 PM",
        "Fri:  11:30 AM - 11:00 PM",
        "Sat:  11:30 AM - 11:00 PM",
        "Sun:  11:30 AM - 11:00 PM"
      }',
      overall_rating: 0,
      total_num_reviews: 0, 
      total_five_star_reviews: 0,
      total_four_star_reviews: 0,
      total_three_star_reviews: 0,
      total_two_star_reviews: 0,
      total_one_star_reviews: 0
    )

    # Restaurant 9
    Restaurant.create!(
      restaurant_name: "Boucherie Union Square",
      cuisine: "Steakhouses, French, Cocktail Bars",
      price: "$$$",
      neighborhood: "Gramercy",
      photo_url: '',
      amenities: "Outdoor seating, Delivery, Takeout",
      phone_number: "(212) 353-0200",
      website_link: "https://boucherieus.com",
      about_restaurant: "Specialties: BOUCHERIE is a traditional French brasserie and steakhouse, celebrating Joie de Vivre. The restaurant prepares a menu of French classics and timeless bistro favorites, in addition to the dry-aged steaks. In addition to an extensive wine list and classic drinks, a beverage program that boasts an inspired menu of absinthe-driven signature cocktails. Surrounded by walls of majestic wooden-framed mirrors and original Belle Époque posters, seating at our Union square location varies among pristine white marble and wood bistro tables, cozy burgundy leather booths, a 32ft. handmade pewter bar, and an option for a 40-guest private room, to make the 222-seat restaurant feel timeless. We look forward to welcoming you! (you can find the hours of operation on this page)* *Please note that kitchen hours may differ",
      street_address: "225 Park Ave S",
      city: "New York",
      zipcode: "10003",
      state: "NY",
      country: "United States",
      menu_link: '',
      latitude: 40.73739337016207,
      longitude: -73.98825679007521,
      hours: '{
        "Mon:  11:00 AM - 12:00 AM",
        "Tue:  11:00 AM - 12:00 AM",
        "Wed:  11:00 AM - 12:00 AM",
        "Thu:  11:00 AM - 12:00 AM",
        "Fri:  11:00 AM - 12:00 AM",
        "Sat:  10:00 AM - 12:00 AM",
        "Sun:  10:00 AM - 12:00 AM"
      }',
      overall_rating: 0,
      total_num_reviews: 0, 
      total_five_star_reviews: 0,
      total_four_star_reviews: 0,
      total_three_star_reviews: 0,
      total_two_star_reviews: 0,
      total_one_star_reviews: 0
    )

    #Restaurant 10
    Restaurant.create!(
      restaurant_name: "Pete's Tavern",
      cuisine: "Pubs, American (Traditional)",
      price: "$$",
      neighborhood: "Gramercy",
      photo_url: '',
      amenities: "Delivery",
      phone_number: "(212) 473-7676",
      website_link: "http://www.petestavern.com",
      about_restaurant: "History: Established in 1864. Pete's is NYC's longest continually open tavern serving Gramercy Park since 1864. O'Henry drafted his famous story 'Gift of the Magi' on a menu at a table in the bar area. During Prohibition, Pete's Tavern remained open under guise as a Flower shop, using the refrigerator door as entrance into the bar. The fine traditions and exquisite workmanship that made Pete's stand out for over 150 years still remain apparent in the restaurant and bar as well as the upstairs Speakeasy party room.",
      street_address: "129 E 18th St",
      city: "New York",
      zipcode: "10003",
      state: "NY",
      country: "United States",
      menu_link: '',
      latitude: 40.73657216609884, 
      longitude: -73.986722665649,
      hours: '{
        "Mon:   4:00 PM - 2:00 AM",
        "Tue:  12:00 PM - 2:00 AM",
        "Wed:  12:00 PM - 2:30 AM",
        "Thu:  12:00 PM - 3:00 AM",
        "Fri:  12:00 PM - 3:00 AM",
        "Sat:  12:00 PM - 3:00 AM",
        "Sun:  12:00 PM - 2:00 AM"
      }',
      overall_rating: 0,
      total_num_reviews: 0, 
      total_five_star_reviews: 0,
      total_four_star_reviews: 0,
      total_three_star_reviews: 0,
      total_two_star_reviews: 0,
      total_one_star_reviews: 0
    )

    #Restaurant 11
    Restaurant.create!(
      restaurant_name: "Joe's Pizza",
      cuisine: "Pizza",
      price: "$",
      neighborhood: "West Village",
      photo_url: '',
      amenities: "Delivery, Takeout",
      phone_number: "(212) 366-1182",
      website_link: "http://www.joespizzanyc.com",
      about_restaurant: "Established in 1975 by Joe Pozzuoli, originally of Naples, Italy - the birthplace of pizza, Joe's Pizza is a Greenwich Village institution offering the classic New York slice for over 40 years. A perennial top 10 listing in restaurant guides and publications, we serve the best slice in the city. New York Magazine names Joe's Pizza 'Best of New York' and in subsequent reviews has referred to us as 'the quintessential New York slice.' In 2009, GQ Magazine listed us as one of the 'Best 25 Pizzas on Earth.' Throughout the years, our Greenwich Village location has become just as popular with tourists and visitors as it is with native New Yorkers who know where to come for an authentic New York street slice of pizza. After 40 years, we remain an independently owned and operated business, personally supervised by Joe himself. We are still what we've always been: a classic NY slice joint. No glossy corporate backing, no fancy pants pies, no pretensions nonsense, and no gimmicky budget pizza. We are tried and true; the real deal. Try us for the best NY slice around.",
      street_address: "7 Carmine St",
      city: "New York",
      zipcode: "10014",
      state: "NY",
      country: "United States",
      menu_link: '',
      latitude: 40.730830433012784, 
      longitude: -74.00221361534452,
      hours: '{
        "Mon:  10:00 AM - 4:30 AM",
        "Tue:  10:00 AM - 4:30 PM",
        "Wed:  10:00 AM - 10:00 PM",
        "Thu:  10:00 AM - 11:00 PM",
        "Fri:  10:00 AM - 5:00 AM",
        "Sat:  10:00 AM - 5:00 AM",
        "Sun:  10:00 AM - 5:00 AM"
      }',
      overall_rating: 0,
      total_num_reviews: 0, 
      total_five_star_reviews: 0,
      total_four_star_reviews: 0,
      total_three_star_reviews: 0,
      total_two_star_reviews: 0,
      total_one_star_reviews: 0
    )

    #Restaurant 12
    Restaurant.create!(
      restaurant_name: "Chama Mama",
      cuisine: "Georgian, Wine Bars, Cocktail Bars",
      price: "$$",
      neighborhood: "Chelsea",
      photo_url: '',
      amenities: "Outdoor sesating, Delivery, Takeout",
      phone_number: "(646) 438-9007",
      website_link: "https://www.chamamama.com",
      about_restaurant: "We are Chama Mama - Classic Georgian cuisine with a modern spin! We are excited to introduce you to our three key ingredients that help lay the foundation for Georgian cuisine and Chama Mama as a restaurant - The Tone, khachapuri, and the qvevri! Our Natural Qvevri wines are quite rarely available outside of Georgia.",
      street_address: "149 W 14th St",
      city: "New York",
      zipcode: "10011",
      state: "NY",
      country: "United States",
      menu_link: '',
      latitude: 40.73907981165881,
      longitude: -73.99904151747157 ,
      hours: '{
        "Mon:  11:00 AM - 11:30 PM",
        "Tue:  11:00 AM - 11:30 PM",
        "Wed:  11:00 AM - 11:00 PM",
        "Thu:  11:00 AM - 11:00 PM",
        "Fri:  11:00 AM - 11:00 PM",
        "Sat:  11:00 AM - 11:00 PM",
        "Sun:  11:00 AM - 11:00 PM"
      }',
      overall_rating: 0,
      total_num_reviews: 0, 
      total_five_star_reviews: 0,
      total_four_star_reviews: 0,
      total_three_star_reviews: 0,
      total_two_star_reviews: 0,
      total_one_star_reviews: 0
    )


    puts 'Creating Reviews...'

    #Review 1
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

    #Review 2
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