class GraphQLTypeGenerator
    def self.generate_type(model_class)
        type = GraphQL::ObjectType.define do
            name("#{model_class.name}Type")
            description("Dynamically generated #{model_class.name}")
            for column in model_class.columns
                field(column.name, graphQL_type_from_mysql(column.type))
            end
        end
        return type
    end

    def self.graphQL_type_from_mysql(mysql_type)
        #
    end
end