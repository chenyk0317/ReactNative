/**
 * Indicator
 * Auther joy.ye
 */
'use strict';
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
  Animated,
  Easing,
  Dimensions,
} from 'react-native';

import TimerMixin from 'react-timer-mixin';
const navigatorH = 64; // navigator height
const {width, height} = Dimensions.get('window');
const [left, top, iHeight] = [0, 64+30, height-navigatorH-30];

const loading_page  ='data:image/png;base64,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'

const styles = StyleSheet.create({
  container: {
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"#ffffff",
    //backgroundColor:"#eff3f6",
    //opacity:0.3,
    position:"absolute",
    width:width,
    height:iHeight,
    left:left,
    top:top,
  },
});

export default class Indicator extends Component {
  mixin = [TimerMixin];

  constructor(props) {
    super(props);
    this.state = {
      hide: false,
      rotation: new Animated.Value(0),
    };
  }

  render() {
    return this.state.hide ? null :
      <View style={styles.container}>
        <Animated.Image source={{uri:loading_page}} style={{width:40,height:40, transform: [{rotateZ: this.state.rotation.interpolate({inputRange: [0,1], outputRange: ['0deg', '360deg']})},] }}/>
      </View>;
  }

  componentDidMount() {
    this.rotate();
  }

  rotate() {
    if(!this.state.hide){
      this.state.rotation.setValue(0);
      Animated.timing(
        this.state.rotation,
        {
          toValue: 1,
          duration: 1200,
          easing: Easing.linear
        }
      ).start(()=>this.rotate());
    }
  }

  show() {
    if(this.state.hide){
      this.setState({hide:false}, this.componentDidMount);
    }
  }

  cancel() {
    if(!this.state.hide){
      this.setState({hide:true}, ()=>this.state.rotation.stopAnimation());
    }
  }
}
