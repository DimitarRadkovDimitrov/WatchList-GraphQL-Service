require "http"

module TvShowQueries 
    @@API_KEY = 'da4c6ba6f06724d02816bdcefb12c87b'

    def popular_tv_shows()
        url = "https://api.themoviedb.org/3/tv/popular?api_key=#@@API_KEY&language=en-US"
        response = HTTP.get(url).parse
        return response
    end

    def top_rated_tv_shows()
        url = "https://api.themoviedb.org/3/tv/top_rated?api_key=#@@API_KEY&language=en-US"
        response = HTTP.get(url).parse
        return response
    end

    def on_air_tv_shows()
        url = "https://api.themoviedb.org/3/tv/on_the_air?api_key=#@@API_KEY&language=en-US"
        response = HTTP.get(url).parse
        return response
    end
end