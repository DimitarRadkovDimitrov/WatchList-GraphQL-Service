import React from 'react';
import {Text, View, ScrollView, ActivityIndicator, StyleSheet, AppRegistry} from 'react-native';
import {Query} from 'react-apollo';
import {ButtonGroup} from 'react-native-elements';
import {imgSrcField, recordTypeField, recordNameField, getImgSrcFromPath} from '../util/metadata';
import RecordList from '../components/RecordList';
import * as queries from '../graphQL/queries';
import {height, width, padding} from '../styles/style';

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

    static navigationOptions = {
        header: null,
    };

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
            'recordType': record[recordTypeField],
        });
    }

    render() 
    {
        const buttons = ['Movies', 'TV'];
        let view;

        if (this.state.selectedIndex == 0)
        {
            view = 
            <ScrollView>
                <MovieListQuery header="Popular" queryName="popularMovies" handleRecordClick={this.handleRecordClick} />
                <MovieListQuery header="Top Rated" queryName='topRatedMovies' handleRecordClick={this.handleRecordClick} />
                <MovieListQuery header="Now Playing" queryName='nowPlayingMovies' handleRecordClick={this.handleRecordClick} />
                <MovieListQuery header="Upcoming" queryName='upcomingMovies' handleRecordClick={this.handleRecordClick} />
            </ScrollView>;
        }
        else
        {
            view = 
            <ScrollView>
                <TvListQuery header="Popular" queryName="popularTvShows" handleRecordClick={this.handleRecordClick} />
                <TvListQuery header="Top Rated" queryName='topRatedTvShows' handleRecordClick={this.handleRecordClick} />
                <TvListQuery header="On Air" queryName='onAirTvShows' handleRecordClick={this.handleRecordClick} />
            </ScrollView>;
        }

        return(
            <View style={styles.container}>
                <ButtonGroup
                    buttons={buttons}
                    selectedIndex={this.state.selectedIndex}
                    onPress={this.handleSelectionChange}
                    containerStyle={styles.buttonGroup}
                />
                {view}
            </View>
        );
    }
}

function MovieListQuery(props)
{
    return(
        <Query query={queries[props.queryName]}>
        {
            ({loading, error, data}) => {
                if (loading)
                {
                    return(
                        <View style={{flex: 1, padding: 20}}>
                            <ActivityIndicator/>
                        </View>
                    );
                }
                if (error)
                {
                    return(
                        <View>
                            <Text>{error.message}</Text>
                        </View>
                    );
                }

                let records = data[props.queryName];
                records.map((record) => {
                    record[imgSrcField] = getImgSrcFromPath(record['poster_path']);
                    record[recordTypeField] = "movie";
                    record[recordNameField] = record.title;
                });

                return(
                    <RecordList 
                        header={props.header} 
                        records={records} 
                        handleRecordClick={props.handleRecordClick}
                        withCaptions={false}
                    />
                );
            }
        }
        </Query>
    );
}

function TvListQuery(props)
{
    return(
        <Query query={queries[props.queryName]}>
        {
            ({loading, error, data}) => {
                if (loading)
                {
                    return(
                        <View style={{flex: 1, padding: 20}}>
                            <ActivityIndicator/>
                        </View>
                    );
                }
                if (error)
                {
                    return(
                        <View>
                            <Text>{error.message}</Text>
                        </View>
                    );
                }

                let records = data[props.queryName];
                records.map((record) => {
                    record[imgSrcField] = getImgSrcFromPath(record['poster_path']);
                    record[recordTypeField] = "tvShow";
                    record[recordNameField] = record.name;
                });

                return(
                    <RecordList 
                        header={props.header} 
                        records={records}
                        handleRecordClick={props.handleRecordClick}
                        withCaptions={false}
                    />
                );
            }
        }
        </Query>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: height.full,
        width: width.full,
    },
    buttonGroup: {
        marginTop: padding.md,
        marginBottom: padding.sm,
        marginLeft: width.quarter,
        marginRight: width.quarter,
    }
});

AppRegistry.registerComponent('ExploreContainer', () => ExploreContainer);
