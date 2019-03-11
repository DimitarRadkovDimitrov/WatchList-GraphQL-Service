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
                <Text>{this.props.id}</Text>
                <Text>{this.props.title}</Text>
                <Image source={{uri: this.props.imgSrc, width: 90, height: 125}} />
                <Text>Popularity: {this.props.popularity}</Text>
                <Text>Vote Average: {this.props.vote_average}</Text>
                <Text>{this.props.description}</Text>
                {this.props.children}
            </View>    
        );
    }
}

AppRegistry.registerComponent("RecordDetails", () => RecordDetails);
