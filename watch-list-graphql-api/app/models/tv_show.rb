require_relative '../graphql/graphQL_type_generator'

class TvShow < ApplicationRecord
    include ActiveModel::Serializers::JSON
    
    def self.graphQLType
        @@graphQLType = GraphQLTypeGenerator.generate_type(TvShow)
    end

    def attributes=(hash)
        hash.each do |key, value|
            send("#{key}=", value)
        end
    end
end
