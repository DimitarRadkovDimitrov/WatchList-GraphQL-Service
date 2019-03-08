class CreateJoinTableTvShowPerson < ActiveRecord::Migration[5.2]
  def change
    create_join_table :tv_shows, :people do |t|
      t.index [:tv_show_id, :person_id]
      t.index [:person_id, :tv_show_id]
    end
  end
end
