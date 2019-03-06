import React from 'react';
import {View, AppRegistry, Image, Text, TouchableHighlight} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

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
                            <TouchableHighlight key={record.id} onPress={this.handleRecordClick.bind(this, record)}>
                                <Image source={{uri: record['imgSrc'], width: 90, height: 125}} />
                            </TouchableHighlight>     
                        );
                    })
                }       
                </ScrollView>
            </View>        
        );
    }
}

AppRegistry.registerComponent("RecordList", () => RecordList);
