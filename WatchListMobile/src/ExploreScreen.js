import React from 'react';
import {View, AppRegistry, ScrollView, Image, Text} from 'react-native';
import RecordList from './RecordList';

class ExploreScreen extends React.Component 
{
    render() 
    {
        return (
            <View>
                <RecordList header='Popular' queryName='popularMovies'/>
                <RecordList header='Top Rated' queryName='topRatedMovies'/>
                <RecordList header='Now Playing' queryName='nowPlayingMovies'/>
                <RecordList header='Upcoming' queryName='upcomingMovies'/>  
            </View>
        );
    }
}

export default ExploreScreen;