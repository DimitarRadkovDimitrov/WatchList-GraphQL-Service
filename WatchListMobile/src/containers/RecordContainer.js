import React from 'react';
import {View, Text, ActivityIndicator, AppRegistry} from 'react-native';
import {Query} from 'react-apollo';
import {imgSrcField, recordTypeField, getImgSrcFromPath} from '../util/metadata';
import RecordDetails from '../components/RecordDetails';
import * as queries from '../graphQL/queries';
import RecordList from '../components/RecordList';

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
                <RecordDetails 
                    id={record.id}
                    title={record.name}
                    imgSrc={record.imgSrc}
                />
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
                        />
                    </RecordDetails>
                );
            }
        }
        </Query>
    );
}

AppRegistry.registerComponent("RecordContainer", () => RecordContainer);
