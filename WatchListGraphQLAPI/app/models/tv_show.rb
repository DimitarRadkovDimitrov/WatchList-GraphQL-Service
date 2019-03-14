require_relative '../graphql/graphQL_type_generator'
require_relative '../graphql/queries/person_queries'

class TvShow < ApplicationRecord
    has_many :people
    serialize :created_by, Array
    GraphQLType = GraphQLTypeGenerator.generate_type(TvShow)

    include ActiveModel::Serializers::JSON
    include PersonQueries
    
    def attributes=(hash)
        hash.each do |key, value|
            send("#{key}=", value)
        end
    end

    def people()
        return cast_by_tv_show_id(self.id)
    end
end
