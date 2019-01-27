module Types
    class MovieType < BaseObject
        field :id, ID, null: false
        field :title, String, null: false
        field :description, String, null: false
    end
end