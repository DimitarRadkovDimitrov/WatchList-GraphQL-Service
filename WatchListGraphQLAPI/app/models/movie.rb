require_relative '../graphql/graphQL_type_generator'
require_relative '../graphql/queries/person_queries'

class Movie < ApplicationRecord
    has_and_belongs_to_many :people

    include ActiveModel::Serializers::JSON
    include PersonQueries
    GraphQLType = GraphQLTypeGenerator.generate_type(Movie)

    def people()
        return cast_by_movie_id(self.id)
    end
    
    def attributes=(hash)
        hash.each do |key, value|
            send("#{key}=", value)
        end
    end
end
