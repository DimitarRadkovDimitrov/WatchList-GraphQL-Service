import React from 'react';
import {View, AppRegistry} from 'react-native';
import {ApolloProvider} from 'react-apollo';
import {client} from '../App';
import RecordList from './components/RecordList';

export default class ExploreScreen extends React.Component 
{
    render() 
    {
        return (
            <ApolloProvider client={client}>  
                <View>
                    <RecordList header='Popular' queryName='popularMovies'/>
                    <RecordList header='Top Rated' queryName='topRatedMovies'/>
                    <RecordList header='Now Playing' queryName='nowPlayingMovies'/>
                    <RecordList header='Upcoming' queryName='upcomingMovies'/>  
                </View>
            </ApolloProvider>
        );
    }
}

AppRegistry.registerComponent('ExploreScreen', () => ExploreScreen);