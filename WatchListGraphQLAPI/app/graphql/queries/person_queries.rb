require "http"
require_relative "../../models/person"
require_relative "../../models/serializers"

module PersonQueries
    @@API_KEY = 'da4c6ba6f06724d02816bdcefb12c87b'

    def person_by_id(id:)
        url = "https://api.themoviedb.org/3/person/#{id}?api_key=#@@API_KEY&language=en-US"
        response = HTTP.get(url)
        return Serializers.serialize_json_object_to_type(response, Person)
    end

    def cast_by_movie_id(id)
        url = "https://api.themoviedb.org/3/movie/#{id}/credits?api_key=#@@API_KEY&language=en-US"
        response = HTTP.get(url)
        return Serializers.serialize_json_array_to_type(response, Person, "cast")
    end

    def cast_by_tv_show_id(id)
        url = "https://api.themoviedb.org/3/tv/#{id}/credits?api_key=#@@API_KEY&language=en-US"
        response = HTTP.get(url)
        return Serializers.serialize_json_array_to_type(response, Person, "cast")
    end
end