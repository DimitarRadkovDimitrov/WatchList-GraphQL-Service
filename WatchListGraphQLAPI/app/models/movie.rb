require_relative '../graphql/graphQL_type_generator'
require_relative '../graphql/queries/person_queries'

class Movie < ApplicationRecord
    has_many :people
    GraphQLType = GraphQLTypeGenerator.generate_type(Movie)

    include ActiveModel::Serializers::JSON
    include PersonQueries
    
    def attributes=(hash)
        hash.each do |key, value|
            send("#{key}=", value)
        end
    end

    def people()
        return cast_by_movie_id(self.id)
    end
end
