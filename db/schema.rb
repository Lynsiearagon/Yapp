# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2023_03_21_231713) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "restaurants", force: :cascade do |t|
    t.string "restaurant_name", null: false
    t.string "phone_number", null: false
    t.string "cuisine", null: false
    t.string "price", null: false
    t.string "website_link", null: false
    t.string "photo_url"
    t.string "amenities", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "street_address", null: false
    t.string "city", null: false
    t.string "zipcode", null: false
    t.string "state", null: false
    t.string "country", null: false
    t.float "longitude", null: false
    t.float "latitude", null: false
    t.string "neighborhood", null: false
    t.string "about_restaurant"
    t.string "menu_link"
    t.json "hours", null: false
    t.integer "total_num_reviews"
    t.integer "total_five_star_reviews"
    t.integer "total_four_star_reviews"
    t.integer "total_three_star_reviews"
    t.integer "total_two_star_reviews"
    t.integer "total_one_star_reviews"
    t.float "overall_rating"
    t.index ["cuisine"], name: "index_restaurants_on_cuisine"
    t.index ["neighborhood"], name: "index_restaurants_on_neighborhood"
    t.index ["price"], name: "index_restaurants_on_price"
    t.index ["restaurant_name"], name: "index_restaurants_on_restaurant_name"
  end

  create_table "reviews", force: :cascade do |t|
    t.text "body", null: false
    t.integer "star_rating", null: false
    t.bigint "reviewer_id", null: false
    t.bigint "restaurant_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "photo_url"
    t.string "reviewer_first_name", null: false
    t.string "reviewer_last_name"
    t.index ["restaurant_id"], name: "index_reviews_on_restaurant_id"
    t.index ["reviewer_id"], name: "index_reviews_on_reviewer_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "first_name", null: false
    t.string "last_name", null: false
    t.string "email", null: false
    t.string "photo_url"
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "zipcode", null: false
    t.date "birthday"
    t.string "month"
    t.string "day"
    t.string "year"
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
  end

  add_foreign_key "reviews", "restaurants"
  add_foreign_key "reviews", "users", column: "reviewer_id"
end
