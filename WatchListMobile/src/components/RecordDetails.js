import React from 'react';
import {Text, AppRegistry} from 'react-native';

export default class RecordDetails extends React.Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        return(<Text>Dimitar</Text>);
    }
}

AppRegistry.registerComponent("RecordDetails", () => RecordDetails);
