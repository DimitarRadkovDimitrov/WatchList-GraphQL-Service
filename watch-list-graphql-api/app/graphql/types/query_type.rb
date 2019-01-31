require_relative '../queries/movie_queries'
require_relative '../queries/tv_show_queries'
require_relative '../../models/tv_show'

module Types
    class QueryType < Types::BaseObject
        include MovieQueries
        include TvShowQueries
        field :all_movies, [MovieType], null: false, description: "Get all movies"
        field :popular_tv_shows, [TvShow.graphQLType], null: false, description: "Get list of popular tv shows"
        #field :top_rated_tv_shows, [TvShowType], null: false, description: "Get list of top rated tv shows"
        #field :on_air_tv_shows, [TvShowType], null: false, description: "Get list of tv shows on air in last 7 days"
    end
end
