class CreateTvShows < ActiveRecord::Migration[5.2]
  def change
    create_table :tv_shows do |t|
      t.string :name
      t.string :overview
      t.integer :number_of_episodes
      t.integer :number_of_seasons
      t.string :poster_path
      t.string :backdrop_path
      t.float :vote_average
      t.float :popularity
      t.text :created_by
      t.timestamps
    end
  end
end
