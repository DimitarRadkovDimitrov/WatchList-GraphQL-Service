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

ActiveRecord::Schema.define(version: 2019_03_08_170819) do

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

  create_table "movies_people", id: false, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8", force: :cascade do |t|
    t.bigint "movie_id", null: false
    t.bigint "person_id", null: false
    t.index ["movie_id", "person_id"], name: "index_movies_people_on_movie_id_and_person_id"
    t.index ["person_id", "movie_id"], name: "index_movies_people_on_person_id_and_movie_id"
  end

  create_table "people", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8", force: :cascade do |t|
    t.string "name"
    t.text "biography"
    t.string "birthday"
    t.string "deathday"
    t.float "popularity"
    t.string "known_for_department"
    t.string "place_of_birth"
    t.string "profile_path"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "people_tv_shows", id: false, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8", force: :cascade do |t|
    t.bigint "tv_show_id", null: false
    t.bigint "person_id", null: false
    t.index ["person_id", "tv_show_id"], name: "index_people_tv_shows_on_person_id_and_tv_show_id"
    t.index ["tv_show_id", "person_id"], name: "index_people_tv_shows_on_tv_show_id_and_person_id"
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
