require "http"

class Serializers
    def self.serialize_json_object_to_type(json, type)
        jsonObjectHash = json.parse()
        modelObject = type.new
        availableFields = modelObject.attribute_names
        modelObject.from_json(jsonObjectHash.to_json(only: availableFields))
        return modelObject
    end
    
    def self.serialize_json_array_to_type(json, type, fieldName)
        modelObjectList = Array.new
        for jsonObjectHash in json.parse()[fieldName]
            modelObject = type.new
            availableFields = modelObject.attribute_names
            modelObject.from_json(jsonObjectHash.to_json(only: availableFields))
            modelObjectList.push(modelObject)
        end
        return modelObjectList
    end
end