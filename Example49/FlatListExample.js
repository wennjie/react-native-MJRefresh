import React, {Component} from 'react';
import {StyleSheet, View, Text,ListView,FlatList} from 'react-native';
import PropTypes from 'prop-types';
import HuaWeiRefreshControl from './HuaWeiRefreshControl';
import {ScrollView} from 'react-native-mjrefresh-lower'

export default class FlatListExample extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: ['row 1', 'row 2','row 3','row 4','row 5','row 6','row 7','row 8'],
        };
    }
    _onRefresh=()=>{
        setTimeout(()=>{
            this._hw && this._hw.finishRefresh()
        },1000)
    }
    render() {
        return (
            <View style={{flex: 1}}>
                <FlatList
                    //legacyImplementation 如果需要使用此属性，应从mjrefresh插件中引入Flatlist
                    keyExtractor={(item)=>item}
                    data={this.state.data}
                    renderItem={({item,index}) => <Text key={index} onPress={()=>alert(111)} style={{height:100}}>{item}</Text>}
                    renderScrollComponent={props=><ScrollView
                        style={{flex:1}}
                        refreshControl={
                            <HuaWeiRefreshControl
                                ref={ref=>this._hw = ref}
                                onRefresh={this._onRefresh}
                            />
                        }
                        {...props}
                    />}
                />
            </View>
        )
    }
}