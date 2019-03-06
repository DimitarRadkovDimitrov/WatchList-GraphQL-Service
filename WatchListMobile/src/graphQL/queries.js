import gql from 'graphql-tag';

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
