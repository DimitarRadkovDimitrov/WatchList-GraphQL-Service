class GraphQLTypeGenerator
    def self.generate_type(model_class)
        type = GraphQL::ObjectType.define do
            name("#{model_class.name}Type")
            description("Dynamically generated #{model_class.name}")

            for column in model_class.columns
                field(column.name, GraphQLTypeGenerator.get_scalar_from_mysql_type(column.type))
            end

            for associatedType in model_class.reflect_on_all_associations(:has_and_belongs_to_many)
                model_name = associatedType.name.to_s()
                model_graphql_type = GraphQLTypeGenerator.get_graphql_type_from_model_name(model_name.capitalize().singularize())
                field(model_name, model_graphql_type.to_list_type())
            end
        end
        return type
    end

    def self.get_graphql_type_from_model_name(model_name)
        model = model_name.constantize()
        return model::GraphQLType
    end

    def self.get_scalar_from_mysql_type(mysql_type)
        case mysql_type
            when :integer
                return GraphQL::INT_TYPE
            when :decimal, :float
                return GraphQL::FLOAT_TYPE
            when :boolean
                return GraphQL::BOOLEAN_TYPE
            else
                return GraphQL::STRING_TYPE
        end
    end
end