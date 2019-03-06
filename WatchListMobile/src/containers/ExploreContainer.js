import React from 'react';
import {View, ScrollView, AppRegistry} from 'react-native';
import {ButtonGroup} from 'react-native-elements';
import RecordList from '../components/RecordList';

export default class ExploreContainer extends React.Component 
{
    constructor(props)
    {
        super(props);
        this.state = {
            selectedIndex: 0
        };
        this.handleSelectionChange = this.handleSelectionChange.bind(this);
        this.handleRecordClick = this.handleRecordClick.bind(this);
    }

    handleSelectionChange(selectedIndex)
    {
        this.setState({
            selectedIndex
        });
    }

    handleRecordClick(record)
    {
        this.props.navigation.navigate('RecordContainer', {
            'record': record,
            'recordType': record['recordType'],
        });
    }

    render() 
    {
        const buttons = ['Movies', 'TV'];
        let view;

        if (this.state.selectedIndex == 0)
        {
            view = 
            <View>
                <ScrollView>
                    <RecordList 
                        header='Popular' 
                        queryName='popularMovies' 
                        recordType='movie' 
                        handleRecordClick={this.handleRecordClick}
                    />
                    <RecordList 
                        header='Top Rated' 
                        queryName='topRatedMovies' 
                        recordType='movie' 
                        handleRecordClick={this.handleRecordClick}
                    />
                    <RecordList
                        header='Now Playing'
                        queryName='nowPlayingMovies'
                        recordType='movie'
                        handleRecordClick={this.handleRecordClick}
                    />
                    <RecordList 
                        header='Upcoming' 
                        queryName='upcomingMovies' 
                        recordType='movie' 
                        handleRecordClick={this.handleRecordClick}
                    />  
                </ScrollView>
            </View>;
        }
        else
        {
            view = 
            <View>
                <ScrollView>
                    <RecordList 
                        header='Popular' 
                        queryName='popularTvShows' 
                        recordType='tvShow' 
                        handleRecordClick={this.handleRecordClick}
                    />
                    <RecordList 
                        header='Top Rated' 
                        queryName='topRatedTvShows' 
                        recordType='tvShow' 
                        handleRecordClick={this.handleRecordClick}
                    />
                    <RecordList 
                        header='On Air' 
                        queryName='onAirTvShows' 
                        recordType='tvShow' 
                        handleRecordClick={this.handleRecordClick}
                    />  
                </ScrollView>
            </View>;
        }

        return(
            <View>
                <ButtonGroup
                    buttons={buttons}
                    selectedIndex={this.state.selectedIndex}
                    onPress={this.handleSelectionChange}
                />
                {view}
            </View>
        );
    }
}

AppRegistry.registerComponent('ExploreContainer', () => ExploreContainer);
