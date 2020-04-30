# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_04_30_182132) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "listings", force: :cascade do |t|
    t.integer "sneaker_id", null: false
    t.float "size", null: false
    t.integer "price", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["sneaker_id"], name: "index_listings_on_sneaker_id", unique: true
  end

  create_table "sneakers", force: :cascade do |t|
    t.string "name", null: false
    t.text "description", null: false
    t.date "release_date", null: false
    t.string "sku", null: false
    t.string "brand", null: false
    t.string "upper_material", null: false
    t.string "main_color", null: false
    t.string "colorway", null: false
    t.string "designer", null: false
    t.string "silhouette", null: false
    t.string "technology", null: false
    t.string "category", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["brand"], name: "index_sneakers_on_brand"
    t.index ["category"], name: "index_sneakers_on_category"
    t.index ["designer"], name: "index_sneakers_on_designer"
    t.index ["name"], name: "index_sneakers_on_name", unique: true
    t.index ["release_date"], name: "index_sneakers_on_release_date"
    t.index ["silhouette"], name: "index_sneakers_on_silhouette"
    t.index ["sku"], name: "index_sneakers_on_sku", unique: true
    t.index ["technology"], name: "index_sneakers_on_technology"
  end

  create_table "users", force: :cascade do |t|
    t.string "username", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
    t.index ["username"], name: "index_users_on_username", unique: true
  end

end
