import React from 'react';
import {View, AppRegistry, Image, Text, TouchableHighlight} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {imgSrcField, recordNameField} from '../util/metadata';

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
            <View>
                <Text>{this.props.header}</Text>
                <ScrollView horizontal>
                {
                    this.props.records.map((record) => { 
                        return(
                            <View key={record.id} width={this.props.imgWidth}>                 
                                <TouchableHighlight onPress={this.handleRecordClick.bind(this, record)}>
                                {   
                                    record[imgSrcField] ? (
                                        <Image source={{uri: record[imgSrcField], width: this.props.imgWidth, height: this.props.imgHeight}} /> 
                                    ) : (                                
                                        <Image source={require('../../assets/90px-No_image_available.png')} style={{width: this.props.imgWidth, height: this.props.imgHeight}} />    
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

AppRegistry.registerComponent("RecordList", () => RecordList);
