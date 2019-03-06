import React from 'react';
import {View, Text, Image, AppRegistry} from 'react-native';

export default class RecordDetails extends React.Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        return(
            <View>
                <Text>Record Details</Text>
            </View>    
        );
    }
}

AppRegistry.registerComponent("RecordDetails", () => RecordDetails);
