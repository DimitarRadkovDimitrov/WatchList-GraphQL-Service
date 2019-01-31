class GraphQLTypeGenerator
    def self.generate_type(model_class)
        type = GraphQL::ObjectType.define do
            name("#{model_class.name}Type")
            description("Dynamically generated #{model_class.name}")
            for column in model_class.columns
                field(column.name, GraphQLTypeGenerator.get_scalar_from_mysql_type(column.type))
            end
        end
        return type
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