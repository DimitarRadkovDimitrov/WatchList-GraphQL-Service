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

ActiveRecord::Schema.define(version: 2019_01_26_192705) do

  create_table "movies", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8", force: :cascade do |t|
    t.string "title"
    t.string "overview"
    t.string "poster_path"
    t.string "backdrop_path"
    t.float "vote_average"
    t.float "popularity"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "tv_shows", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8", force: :cascade do |t|
    t.string "name"
    t.string "overview"
    t.integer "number_of_episodes"
    t.integer "number_of_seasons"
    t.string "poster_path"
    t.string "backdrop_path"
    t.float "vote_average"
    t.float "popularity"
    t.text "created_by"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
