class CreateMovies < ActiveRecord::Migration[5.2]
    def change
        create_table :movies do |t|
            t.string :title
            t.string :overview
            t.string :poster_path
            t.string :backdrop_path
            t.float :vote_average
            t.float :popularity
            t.timestamps
        end
    end
end
