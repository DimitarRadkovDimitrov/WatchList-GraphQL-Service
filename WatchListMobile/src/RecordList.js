import React from 'react';
import {View, AppRegistry, ActivityIndicator, FlatList, Image, Text, TouchableHighlight} from 'react-native';
import {createApolloFetch} from 'apollo-fetch';
import { ScrollView } from 'react-native-gesture-handler';

export default class RecordList extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {isLoading: true};
    }

    componentWillMount()
    {
        fetchRecordList().then(recordListData => {
            this.setState({
                recordListData: recordListData[this.props.queryName],
                isLoading: false
            });
        });
    }

    imageOnClick = () => {
        console.log("ON CLICK");
    };

    render()
    {
        if (this.state.isLoading)
        {
            return(
                <View style={{flex: 1, padding: 20}}>
                    <ActivityIndicator/>
                </View>
            );
        }
        
        return(
            <View>
                <Text>{this.props.header}</Text>  
                <ScrollView horizontal>         
                {
                    this.state.recordListData.map((index, record) => {
                        recordImgSrc = `https://image.tmdb.org/t/p/w92${record.poster_path}`;
                        return(
                            <TouchableHighlight key={record.id} onPress={this.imageOnClick}>
                                <Image source={{uri: recordImgSrc, width: 50, height: 75}} />
                            </TouchableHighlight>     
                        );
                    })
                }             
                </ScrollView>
            </View>
        );        
    }
}

async function fetchRecordList()
{
    try 
    {
        apolloFetch = createApolloFetch({ uri: 'http://10.0.2.2:3000/graphql' });
        let response = await apolloFetch({
            query: 
                `
                    {
                        popularMovies
                        {
                            id
                            title
                            poster_path
                        }
                    }
                `
        });
        return response.data;
    }
    catch(error)
    {
        console.error(error);
    }
}

AppRegistry.registerComponent('WatchList', () => RecordList);