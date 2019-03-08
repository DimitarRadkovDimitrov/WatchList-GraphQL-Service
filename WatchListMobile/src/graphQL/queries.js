import gql from 'graphql-tag';

export const movieById = (id) => {
    return gql`
    {
        movieById(id: ${id})
        {
            id
            title
            overview
            popularity
            backdrop_path
            poster_path
            vote_average
            people
            {
                id
                name
                profile_path
            }
        }
    }`
};

export const tvShowById = (id) => {
    return gql`
    {
        tvShowById(id: ${id})
        {
            id
            name
            overview
            popularity
            backdrop_path
            poster_path
            vote_average
            people
            {
                id
                name
                profile_path
            }
        }
    }`
};

export const popularMovies = gql`
{
    popularMovies
    {
        id
        title
        poster_path
    }
}`;

export const topRatedMovies = gql`
{
    topRatedMovies
    {
        id
        title
        poster_path
    }
}`;

export const nowPlayingMovies = gql`
{
    nowPlayingMovies
    {
        id
        title
        poster_path
    }
}`;

export const upcomingMovies = gql`
{
    upcomingMovies
    {
        id
        title
        poster_path
    }
}`;

export const popularTvShows = gql`
{
    popularTvShows
    {
        id
        name
        poster_path
    }
}`;

export const topRatedTvShows = gql`
{
    topRatedTvShows
    {
        id
        name
        poster_path
    }
}`;

export const onAirTvShows = gql`
{
    onAirTvShows
    {
        id
        name
        poster_path
    }
}`;
