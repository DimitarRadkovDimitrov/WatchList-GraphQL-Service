import React from 'react';
import {View, Text, ActivityIndicator, AppRegistry} from 'react-native';
import {Query} from 'react-apollo';
import {getImgSrcFromPath} from '../util/images';
import RecordDetails from '../components/RecordDetails';
import * as queries from '../graphQL/queries';

export default class RecordContainer extends React.Component
{
    constructor(props)
    {
        super(props);
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
                <MovieDetailsQuery queryName="movieById" id={record.id}/>
            );
        }
        else if (recordType === 'tvShow')
        {
            return(
                <TvShowDetailsQuery queryName="tvShowById" id={record.id}/>
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

                return(
                    <RecordDetails 
                        id={record.id} 
                        title={record.title} 
                        popularity={record.popularity}
                        vote_average={record.vote_average}
                        imgSrc={imgURL}
                        description={record.overview}
                    />
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

                return(
                    <RecordDetails 
                        id={record.id} 
                        title={record.name}
                        popularity={record.popularity}
                        vote_average={record.vote_average}
                        imgSrc={imgURL}
                        description={record.overview}
                    />
                );
            }
        }
        </Query>
    );
}

AppRegistry.registerComponent("RecordContainer", () => RecordContainer);
