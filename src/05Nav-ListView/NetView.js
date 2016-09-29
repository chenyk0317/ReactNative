'use strict';

import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    ActivityIndicator,
} from 'react-native';

import Style from './StyleCss.js';
import Nav from './Nav.js';
import Tab from './Tab.js';
import Ind from './Indicator.js';
import Util from './Util.js';
var productData;

export default class NetView extends React.Component{
  constructor(props) {
        super(props);
        this.state = {
          loading:true,
        };

    }
    render() {
        var  contentView = this.state.loading?(
          <ActivityIndicator
            animating={this.state.loading}
            style={{marginTop: (Util.size.height -64)/2-30}}
            size="small"
          />
        ):(
          <View>
            <Text>{productData.area}</Text>
            <Text>{productData.date}</Text>
            <Text>{productData.backgroundImg}</Text>
            <Text>{productData.weekday}</Text>
            <Text>{productData.updateTime}</Text>
            <Text>{productData.lunar}</Text>
          </View>
        )
        return (
          <View style={Style.container}>
            <Nav {...this.props}/>
            {contentView}
          </View>

      );
    }
    componentWillMount(){
      this.fetchListData();
    }
    componentDidMount(){
    }
    componentWillUnmount() {

     }

    fetchListData(){

      // alert('fetchListData');

      var that = this;
      Util.get("http://nbjzt75.test.djtest.cn/api/guest/lifecalendar",function(data){


        let responseCode = data.code;
        if(responseCode == 0){
          productData = data.data;
          that.setState({loading: false})
        }

      },function(err){
        console.error(err);
        // alert("失败");
      });

    }



}
