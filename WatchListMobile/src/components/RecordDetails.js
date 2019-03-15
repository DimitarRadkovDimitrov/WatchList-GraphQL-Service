import React from 'react';
import {View, Text, Image, ScrollView, AppRegistry, StyleSheet} from 'react-native';
import {scale, verticalScale} from 'react-native-size-matters';
import {width, height, colors, padding, textSize} from '../styles/style';

export default class RecordDetails extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            displayFullDesc: false,
        };
        this.handleSeeMoreClick = this.handleSeeMoreClick.bind(this);
    }

    handleSeeMoreClick()
    {
        this.setState({
            displayFullDesc: !this.state.displayFullDesc,
        });
    }

    render()
    {
        return(
            <ScrollView style={styles.outermostContainer}>
                <View style={styles.rowContainer}>
                    <View>
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
                    </View>
                    <View style={styles.columnContainer}>
                        <Text style={styles.recordTitle}>{this.props.title}</Text>
                        <Text>Popularity: {this.props.popularity}</Text>
                        <Text>Vote Average: {this.props.vote_average}/10</Text>
                    </View>        
                </View>    
                <View>
                    <View style={styles.columnContainer}>
                        <Text style={styles.recordTitle}>Description</Text>
                        {
                            this.state.displayFullDesc ? (
                                <View>
                                    <Text>{this.props.description}</Text>
                                    <Text onPress={this.handleSeeMoreClick} style={styles.hyperLink}>Read Less</Text>
                                </View>
                            ) : (
                                <View>
                                    <Text numberOfLines={3}>{this.props.description}</Text>
                                    <Text onPress={this.handleSeeMoreClick} style={styles.hyperLink}>Read More</Text>
                                </View>
                            )
                        } 
                    </View>
                    {this.props.children}
                </View>
            </ScrollView>        
        );
    }
}

const styles = StyleSheet.create({
    outermostContainer: {
        flex: 1,
        height: height.full,
        width: width.full,
        paddingLeft: padding.sm,
        paddingRight: padding.sm,
    },
    columnContainer: {
        flex: 1,
        flexDirection: 'column',
        paddingLeft: padding.sm,
        paddingRight: padding.sm,
    },
    rowContainer: {
        flex: 1,
        flexDirection: 'row',
        padding: padding.sm,
        paddingRight: padding.xl,
    },
    recordTitle: {
        color: colors.black,
        fontSize: textSize.md,
        paddingBottom: padding.xs,
    },
    imgThumbNail: {
        height: scale(100),
        width: scale(75),
    },
    hyperLink: {
        color: colors.blue,
        textAlign: 'right',
        padding: padding.xs,
    },
});

AppRegistry.registerComponent("RecordDetails", () => RecordDetails);
