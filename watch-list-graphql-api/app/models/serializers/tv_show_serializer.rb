require "http"
require_relative "../tv_show"

class TvShowSerializer
    def self.serialize_json_array_response(response)
        tvShowObjects = Array.new
        for tvShow in response.parse()['results']
            tvShowObject = TvShow.new
            availableTvShowFields = tvShowObject.attribute_names
            tvShowObject.from_json(tvShow.to_json(only: availableTvShowFields))
            tvShowObjects.push(tvShowObject)
        end
        return tvShowObjects
    end
end