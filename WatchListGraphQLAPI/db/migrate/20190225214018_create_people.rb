class CreatePeople < ActiveRecord::Migration[5.2]
  def change
    create_table :people do |t|
      t.string :name
      t.text :biography
      t.string :birthday
      t.string :deathday
      t.float :popularity
      t.string :known_for_department
      t.string :place_of_birth
      t.string :profile_path

      t.timestamps
    end
  end
end
