require "http"

class Serializers
    def self.serialize_json_array_to_type(json, type)
        modelObjectList = Array.new
        for jsonObjectHash in json.parse()['results']
            modelObject = type.new
            availableFields = modelObject.attribute_names
            modelObject.from_json(jsonObjectHash.to_json(only: availableFields))
            modelObjectList.push(modelObject)
        end
        return modelObjectList
    end
end