require_relative '../graphql/graphQL_type_generator'

class TvShow < ApplicationRecord
    include ActiveModel::Serializers::JSON
    
    GraphQLType = GraphQLTypeGenerator.generate_type(TvShow)

    def attributes=(hash)
        hash.each do |key, value|
            send("#{key}=", value)
        end
    end
end
