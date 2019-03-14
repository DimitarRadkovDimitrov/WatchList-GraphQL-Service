import React from 'react';
import {View, AppRegistry, Image, Text, TouchableHighlight, StyleSheet} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {scale, verticalScale} from 'react-native-size-matters';
import {imgSrcField, recordNameField} from '../util/metadata';
import {colors, padding, textSize} from '../styles/style';

export default class RecordList extends React.Component
{
    constructor(props)
    {
        super(props);
        this.handleRecordClick = this.handleRecordClick.bind(this);
    }

    handleRecordClick(record)
    {
        this.props.handleRecordClick(record);
    }
    
    render()
    {
        return(
            <View style={styles.listContainer}>
                <Text style={styles.listHeader}>{this.props.header}</Text>
                <ScrollView horizontal>
                {
                    this.props.records.map((record) => { 
                        return(
                            <View key={record.id} width={styles.imgThumbNail.width}>                 
                                <TouchableHighlight onPress={this.handleRecordClick.bind(this, record)}>
                                {   
                                    record[imgSrcField] ? (
                                        <Image 
                                            source={{uri: record[imgSrcField]}}
                                            style={styles.imgThumbNail}
                                        /> 
                                    ) : (                                
                                        <Image 
                                            source={require('../../assets/90px-No_image_available.png')}
                                            style={styles.imgThumbNail}
                                        />    
                                    )
                                }
                                </TouchableHighlight>
                                {
                                    this.props.withCaptions ? (
                                        <Text numberOfLines={1}>{record[recordNameField]}</Text>
                                    ) : (null)
                                } 
                            </View>
                        );
                    })
                }       
                </ScrollView>
            </View>        
        );
    }
}

const styles = StyleSheet.create({
    listContainer: {
        paddingLeft: padding.sm,
        paddingRight: padding.sm,
        paddingTop: padding.xs,
        paddingBottom: padding.xs,
    },
    listHeader: {
        color: colors.black,
        paddingBottom: padding.xs,
        fontSize: textSize.md,
    },
    imgThumbNail: {
        height: scale(100),
        width: scale(75),
    },
});

AppRegistry.registerComponent("RecordList", () => RecordList);
