import React from 'react';
import {View, ScrollView, AppRegistry} from 'react-native';
import RecordList from '../components/RecordList';

export default class ExploreContainer extends React.Component 
{
    constructor(props)
    {
        super(props);
        this.handleRecordClick = this.handleRecordClick.bind(this);
    }

    handleRecordClick()
    {
        this.props.navigation.navigate('RecordDetails');
    }

    render() 
    {
        return(
            <View>
                <ScrollView>
                    <RecordList header='Popular' queryName='popularMovies' handleRecordClick={this.handleRecordClick}/>
                    <RecordList header='Top Rated' queryName='topRatedMovies' handleRecordClick={this.handleRecordClick}/>
                    <RecordList header='Now Playing' queryName='nowPlayingMovies' handleRecordClick={this.handleRecordClick}/>
                    <RecordList header='Upcoming' queryName='upcomingMovies' handleRecordClick={this.handleRecordClick}/>  
                </ScrollView>
            </View>
        );
    }
}

AppRegistry.registerComponent('ExploreContainer', () => ExploreContainer);
