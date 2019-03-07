require_relative '../graphql/graphQL_type_generator'

class Person < ApplicationRecord
    has_and_belongs_to_many :movies

    include ActiveModel::Serializers::JSON
    GraphQLType = GraphQLTypeGenerator.generate_type(Person)
    
    def attributes=(hash)
        hash.each do |key, value|
            send("#{key}=", value)
        end
    end
end
