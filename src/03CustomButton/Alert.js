/**
 * Alert
 * Auther joy.ye
 */
'use strict';
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableHighlight,
  Animated,
  Easing,
  Dimensions,
} from 'react-native';

import TimerMixin from 'react-timer-mixin';

const {width, height} = Dimensions.get('window');
const navigatorH = 64; // navigator height
const [aWidth, aHeight] = [300, 150];
const [left, top] = [0, 0];
const [middleLeft, middleTop] = [(width - aWidth) / 2, (height - aHeight) / 2 - navigatorH];


const styles = StyleSheet.create({
  container: {
    position:"absolute",
    width:width,
    height:height,
    left:left,
    top:top,
  },
  mask: {
    justifyContent:"center",
    backgroundColor:"#383838",
    opacity:0.8,
    position:"absolute",
    width:width,
    height:height,
    left:left,
    top:top,
  },
  tip: {
    paddingTop:15,
    paddingBottom:10,
    width:aWidth,
    height:aHeight,
    left:middleLeft,
    //top:middleTop,
    backgroundColor:"#fff",
    alignItems:"center",
    borderRadius:5,
    justifyContent:"space-between",
  },
  tipTitle: {
    color:"#000",
    fontSize:18,
  },
  tipContent: {
    color:"#000",
    fontSize:15,
  },
  button: {
    height: 45,
    backgroundColor: '#e6454a',
    borderColor: '#e6454a',
    borderWidth: 1,
    borderRadius: 4,
    alignSelf: 'stretch',
    justifyContent: 'center',
    marginLeft: 10,
    marginRight: 10,
  },
  buttonText: {
    fontSize:18,
    color:"#fff",
    textAlign:"center",
  }
});

export default class Alert extends Component {
  mixins = [TimerMixin];

  constructor(props) {
    super(props);
    this.state = {
      offset: new Animated.Value(0),
      opacity: new Animated.Value(0.8),
      title: "",
      message: "",
      hide: true,
    };
  }

  render() {
    if(this.state.hide){
      return (<View />)
    } else {
      return (
        <View style={styles.container}>
          <Animated.View style={[
            styles.mask,
            {
              opacity: this.state.opacity
            },
          ]} >
          </Animated.View>

          <Animated.View style={[styles.tip, {top:this.state.offset.interpolate({inputRange:[0,1,2], outputRange:[-150, middleTop, height]}) }]}>
            <Text style={styles.tipTitle}>{this.state.title}</Text>
            <Text style={styles.tipContent}>{this.state.message}</Text>
            <TouchableHighlight style={styles.button} underlayColor='#cc0000' onPress={this.iknow.bind(this)}>
              <Text style={styles.buttonText}>我知道了</Text>
            </TouchableHighlight>
          </Animated.View>
        </View>
      );
    }
  }

  componentDidMount() {
  }

  in() {
    this.setState(
      {opacity: new Animated.Value(0.8), offset: new Animated.Value(0)},
      () => Animated.timing(
        this.state.offset,
        {
          easing: Easing.linear,
          duration: 500,
          toValue: 1,
        }
      ).start()
    );

  }

  out() {
    Animated.timing(
      this.state.offset,
      {
        easing: Easing.linear,
        duration: 500,
        toValue: 2,
      }
    ).start();
  }

  maskFadeOut() {
    Animated.timing(
      this.state.opacity,
      {
        easing: Easing.linear,
        duration: 500,
        toValue: 0,
      }
    ).start();
  }

  iknow(event) {
    if(!this.state.hide){
      this.maskFadeOut();

      this.out();

      // close Alert
      setTimeout(
        () => this.setState({hide: true}),
        500
      );
    }
  }

  show(title: string, message: string) {
    if(this.state.hide){
      this.setState({title: title, message: message, hide: false}, this.in);
    }
  }
}
module.exports = Alert;
