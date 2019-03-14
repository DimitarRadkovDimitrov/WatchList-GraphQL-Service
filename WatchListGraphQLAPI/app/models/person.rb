require_relative '../graphql/graphQL_type_generator'
require_relative '../graphql/queries/person_queries'

class Person < ApplicationRecord
    has_many :movies
    has_many :tv_shows
    GraphQLType = GraphQLTypeGenerator.generate_type(Person)

    include ActiveModel::Serializers::JSON
    include PersonQueries
    
    def attributes=(hash)
        hash.each do |key, value|
            send("#{key}=", value)
        end
    end

    def movies()
        return movies_by_person_id(self.id)
    end

    def tvShows()
        return tv_shows_by_person_id(self.id)
    end
end
