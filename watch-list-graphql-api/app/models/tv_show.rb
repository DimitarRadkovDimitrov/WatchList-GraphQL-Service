class TvShow < ApplicationRecord
    include ActiveModel::Serializers::JSON
    
    def attributes=(hash)
        hash.each do |key, value|
            send("#{key}=", value)
        end
    end
end
