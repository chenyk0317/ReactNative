
/**
 *  TabBar 组件
 *
 *  @author kevin
 */

'use strict';

import React, { Component } from 'react';
import {
    View,
    Text,
    Dimensions,
    PixelRatio,
    StyleSheet,
    TouchableOpacity,
}from 'react-native';


const bntHeight = 77/2;

const selectedLineColor='#e6454a';

export default class TabBar extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedIndex:0,
        };
    }

    componentDidMount() {

    }

    _onPressButton(i){
        //console.log(i);
        if (i != this.state.selectedIndex) {
          this.setState(
              {
                  selectedIndex : i,
              }
          );
          let {callback} = this.props;

          callback.apply(null,[i]);
        }

    }


    /**
     * 暴漏给外部,可以指定选中哪个TAB
     *
     * @param i
     */
    setSelectedIndex(i){
        this.state = {
            selectedIndex:i,
        };
    }

    render() {

        let {tabs,height,backgroundColor} = this.props;

        let tabsView = [];

        let num = tabs.length;

        let line = <View style={{marginTop:28/2,width:1/2,height:30/2,backgroundColor:'#f0f0f0',}}></View>;

        for(let i=0;i<num;i++){
            let text = tabs[i].text;
            //let width = tabs[i].width;

            let isSelected = i==this.state.selectedIndex;

            tabsView.push(
                <View key={i} style={{flex:1,}}>

                    <View style={{flexDirection:'row',justifyContent:'center',}}>
                        <TouchableOpacity activeOpacity={1} style={{height:bntHeight,flex:1,}} onPress={()=>this._onPressButton(i)}>
                            <Text style={[styles.textCommon,isSelected ? styles.textSelected:styles.textNormal]}>{text}</Text>
                        </TouchableOpacity>

                        {i<num-1?line:null}

                    </View>

                    <View style={{backgroundColor:isSelected ? selectedLineColor:backgroundColor,flex:1}}></View>

                </View>
            );
        }

        return (
            <View style={{flexDirection:'row',height:height,backgroundColor:backgroundColor}}>
                {tabsView}
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    textCommon:{
        fontSize:26/2,
        marginTop:28/2,
        textAlign:'center'
    },

    textSelected:{
        color:'#333333',

    },

    textNormal:{
        color:'#999999',
    },

});
