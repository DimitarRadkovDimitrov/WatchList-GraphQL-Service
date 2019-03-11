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
                {
                    this.props.imgSrc ? (
                        <Image source={{uri: this.props.imgSrc, width: this.props.imgWidth, height: this.props.imgHeight}} />
                    ) : (
                        <Image source={require('../../assets/90px-No_image_available.png')} style={{width: this.props.imgWidth, height: this.props.imgHeight}} />    
                    )
                }
                <Text>Popularity: {this.props.popularity}</Text>
                <Text>Vote Average: {this.props.vote_average}</Text>
                <Text>{this.props.description}</Text>
                {this.props.children}
            </View>    
        );
    }
}

AppRegistry.registerComponent("RecordDetails", () => RecordDetails);
