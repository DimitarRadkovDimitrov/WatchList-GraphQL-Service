require_relative '../graphql/graphQL_type_generator'

class Person < ApplicationRecord
    include ActiveModel::Serializers::JSON
    GraphQLType = GraphQLTypeGenerator.generate_type(Person)
    
    def attributes=(hash)
        hash.each do |key, value|
            send("#{key}=", value)
        end
    end
end
