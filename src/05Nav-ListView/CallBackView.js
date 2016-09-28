'use strict';

import React from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ListView,
    TouchableOpacity,
    Image,
    Alert,
} from 'react-native';
import Style from './StyleCss.js';
import Nav from './Nav.js';
import Scroll from './Scrollview.js';
import ListView2 from './ListView2.js';

export default class DetailView extends React.Component{
  constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
          <View  style= {Style.container}>
            <Nav  {...this.props}  ref='nav' back={()=> this.back()}/>

            <View height={30}/>
            <TouchableOpacity onPress={() => this.finish()}>
            <Text >返回回调</Text>
            </TouchableOpacity>
          </View>
      );
    }
    back(){
      Alert.alert(
            '提醒',
            '返回拦截',
            [
              {text: 'OK', onPress: () => this.refs.nav.back()},
              {text: 'cancel'},
            ]
          )
    }
    finish(){
      this.refs.nav.back();
      if(this.props.callback) {
               this.props.callback('--------回调--------');
           }
    }

    componentWillMount(){


    }
    componentDidMount(){

    }
}
