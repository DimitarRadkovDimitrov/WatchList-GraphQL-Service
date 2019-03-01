import React from 'react';
import {View, AppRegistry, ActivityIndicator, FlatList, Image, Text, TouchableHighlight} from 'react-native';
import {createApolloFetch} from 'apollo-fetch';
import { ScrollView } from 'react-native-gesture-handler';
import * as queries from '../graphQL/queries';

export default class RecordList extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {isLoading: true};
    }

    componentWillMount()
    {
        fetchRecordList(this.props.queryName).then(recordListData => {
            this.setState({
                recordListData: recordListData,
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
                    this.state.recordListData.map((record) => {
                        recordImgSrc = `https://image.tmdb.org/t/p/w92${record.poster_path}`;
                        return(
                            <TouchableHighlight key={record.id} onPress={this.imageOnClick}>
                                <Image source={{uri: recordImgSrc, width: 90, height: 125}} />
                            </TouchableHighlight>     
                        );
                    })
                }             
                </ScrollView>
            </View>
        );        
    }
}

async function fetchRecordList(queryName)
{
    try 
    {
        apolloFetch = createApolloFetch({ uri: 'http://10.0.2.2:3000/graphql' });
        let response = await apolloFetch({
            query: queries[queryName]
        });
        console.log(response)
        return response.data[queryName];
    }
    catch(error)
    {
        console.error(error);
    }
}
