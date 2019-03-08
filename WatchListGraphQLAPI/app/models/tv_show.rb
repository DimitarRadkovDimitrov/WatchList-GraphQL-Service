require_relative '../graphql/graphQL_type_generator'
require_relative '../graphql/queries/person_queries'

class TvShow < ApplicationRecord
    has_and_belongs_to_many :people
    serialize :created_by, Array

    include ActiveModel::Serializers::JSON
    include PersonQueries
    GraphQLType = GraphQLTypeGenerator.generate_type(TvShow)

    def people()
        return cast_by_tv_show_id(self.id)
    end

    def attributes=(hash)
        hash.each do |key, value|
            send("#{key}=", value)
        end
    end
end
