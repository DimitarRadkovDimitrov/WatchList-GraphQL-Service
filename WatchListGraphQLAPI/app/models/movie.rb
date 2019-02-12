require_relative '../graphql/graphQL_type_generator'

class Movie < ApplicationRecord
    include ActiveModel::Serializers::JSON
    GraphQLType = GraphQLTypeGenerator.generate_type(Movie)
    
    def attributes=(hash)
        hash.each do |key, value|
            send("#{key}=", value)
        end
    end
end
