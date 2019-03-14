import React from 'react';
import {View, Text, ActivityIndicator, AppRegistry} from 'react-native';
import {Query} from 'react-apollo';
import {imgSrcField, recordTypeField, recordNameField, getImgSrcFromPath} from '../util/metadata';
import RecordDetails from '../components/RecordDetails';
import RecordList from '../components/RecordList';
import * as queries from '../graphQL/queries';

export default class RecordContainer extends React.Component
{
    constructor(props)
    {
        super(props);
        this.handleRecordClick = this.handleRecordClick.bind(this);
    }

    handleRecordClick(record)
    {
        this.props.navigation.push('RecordContainer', {
            'record': record,
            'recordType': record[recordTypeField],
        });
    }

    render()
    {
        const record = this.props.navigation.getParam('record');
        const recordType = this.props.navigation.getParam('recordType');

        if (!recordType)
        {
            return null;
        }

        if (recordType === 'movie')
        {
            return(
                <MovieDetailsQuery queryName="movieById" id={record.id} handleRecordClick={this.handleRecordClick}/>
            );
        }
        else if (recordType === 'tvShow')
        {
            return(
                <TvShowDetailsQuery queryName="tvShowById" id={record.id} handleRecordClick={this.handleRecordClick}/>
            );
        }
        else if (recordType === 'person')
        {
            return(
                <PersonDetailsQuery queryName="personById" id={record.id} handleRecordClick={this.handleRecordClick}/>
            );
        }  
    }
}

function MovieDetailsQuery(props)
{
    return(
        <Query query={queries[props.queryName](props.id)}>
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

                const record = data[props.queryName];
                const imgURL = getImgSrcFromPath(record['poster_path']);
                const cast = record['people'];

                cast.map((castMember) => {
                    castMember[imgSrcField] = getImgSrcFromPath(castMember['profile_path']);
                    castMember[recordTypeField] = 'person';
                });

                return(
                    <RecordDetails 
                        id={record.id} 
                        title={record.title} 
                        popularity={record.popularity}
                        vote_average={record.vote_average}
                        imgSrc={imgURL}
                        description={record.overview}
                    >
                        <RecordList 
                            header="Cast" 
                            records={cast}
                            handleRecordClick={props.handleRecordClick}
                            withCaptions={true}
                        />
                    </RecordDetails>
                );
            }
        }
        </Query>
    );
}

function TvShowDetailsQuery(props)
{
    return(
        <Query query={queries[props.queryName](props.id)}>
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

                const record = data[props.queryName];
                const imgURL = getImgSrcFromPath(record['poster_path']);
                const cast = record['people'];

                cast.map((castMember) => {
                    castMember[imgSrcField] = getImgSrcFromPath(castMember['profile_path']);
                    castMember[recordTypeField] = 'person';
                });

                return(
                    <RecordDetails 
                        id={record.id} 
                        title={record.name}
                        popularity={record.popularity}
                        vote_average={record.vote_average}
                        imgSrc={imgURL}
                        description={record.overview}
                    >
                        <RecordList 
                            header="Cast" 
                            records={cast}
                            handleRecordClick={props.handleRecordClick}
                            withCaptions={true}
                        />
                    </RecordDetails>
                );
            }
        }
        </Query>
    );
}

function PersonDetailsQuery(props)
{
    return(
        <Query query={queries[props.queryName](props.id)}>
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

                const record = data[props.queryName];
                const imgURL = getImgSrcFromPath(record['profile_path']);
                const movies = record['movies'];
                const tvShows = record['tvShows'];

                movies.map((movie) => {
                    movie[imgSrcField] = getImgSrcFromPath(movie['poster_path']);
                    movie[recordTypeField] = 'movie';
                    movie[recordNameField] = movie.title;
                });

                tvShows.map((tvShow) => {
                    tvShow[imgSrcField] = getImgSrcFromPath(tvShow['poster_path']);
                    tvShow[recordTypeField] = "tvShow";
                    tvShow[recordNameField] = tvShow.name;
                });

                return(
                    <RecordDetails 
                        id={record.id}
                        title={record.name}
                        popularity={record.popularity}
                        imgSrc={imgURL}
                        description={record.biography}
                        withCaptions={true}
                    >
                        <View>
                            <RecordList 
                                header="Movies" 
                                records={movies}
                                handleRecordClick={props.handleRecordClick}
                                withCaptions={true}
                            />
                            <RecordList 
                                header="TV Shows" 
                                records={tvShows}
                                handleRecordClick={props.handleRecordClick}
                                withCaptions={true}
                            />
                        </View>
                    </RecordDetails>
                );
            }
        }
        </Query>
    );
}

AppRegistry.registerComponent("RecordContainer", () => RecordContainer);
