require "http"
require_relative "../../models/movie"
require_relative "../../models/serializers"

module MovieQueries
    @@API_KEY = 'da4c6ba6f06724d02816bdcefb12c87b'

    def movie_by_id(id:)
        url = "https://api.themoviedb.org/3/movie/#{id}?api_key=#@@API_KEY&language=en-US"
        response = HTTP.get(url)
        return Serializers.serialize_json_object_to_type(response, Movie)
    end

    def popular_movies()
        url = "https://api.themoviedb.org/3/movie/popular?api_key=#@@API_KEY&language=en-US"
        response = HTTP.get(url)
        return Serializers.serialize_json_array_to_type(response, Movie, "results")
    end

    def top_rated_movies()
        url = "https://api.themoviedb.org/3/movie/top_rated?api_key=#@@API_KEY&language=en-US"
        response = HTTP.get(url)
        return Serializers.serialize_json_array_to_type(response, Movie, "results")
    end

    def upcoming_movies()
        url = "https://api.themoviedb.org/3/movie/upcoming?api_key=#@@API_KEY&language=en-US"
        response = HTTP.get(url)
        return Serializers.serialize_json_array_to_type(response, Movie, "results")
    end

    def now_playing_movies()
        url = "https://api.themoviedb.org/3/movie/now_playing?api_key=#@@API_KEY&language=en-US"
        response = HTTP.get(url)
        return Serializers.serialize_json_array_to_type(response, Movie, "results")
    end
end