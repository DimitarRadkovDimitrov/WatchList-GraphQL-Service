import React from 'react';
import {View, Text, Image, AppRegistry, StyleSheet} from 'react-native';
import {scale, verticalScale} from 'react-native-size-matters';
import {padding} from '../styles/style';

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
                <View style={styles.container}>
                    <Text>{this.props.id}</Text>
                    <Text>{this.props.title}</Text>
                    {
                        this.props.imgSrc ? (
                            <Image 
                                source={{uri: this.props.imgSrc}}
                                style={styles.imgThumbNail}
                            />
                        ) : (
                            <Image 
                                source={require('../../assets/90px-No_image_available.png')} 
                                style={imgThumbNail}
                            />    
                        )
                    }
                    <Text>Popularity: {this.props.popularity}</Text>
                    <Text>Vote Average: {this.props.vote_average}</Text>
                    <Text>{this.props.description}</Text>
                </View>    
                <View>
                    {this.props.children}
                </View>        
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: padding.sm,
    },
    imgThumbNail: {
        height: scale(100),
        width: scale(75),
    },
});

AppRegistry.registerComponent("RecordDetails", () => RecordDetails);
