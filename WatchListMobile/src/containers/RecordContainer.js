import React from 'react';
import {View, Text, Image, AppRegistry} from 'react-native';

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
                <View>
                    <Text>Movie</Text>
                </View>
            );
        }
        else if (recordType === 'tvShow')
        {
            return(
                <View>
                    <Text>Tv Show</Text>
                </View>
            );
        }
        else if (recordType === 'person')
        {
            return(
                <View> 
                    <Text>Person</Text>
                </View>
            );
        }  
    }
}

AppRegistry.registerComponent("RecordContainer", () => RecordContainer);
