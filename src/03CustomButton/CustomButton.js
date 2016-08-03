'use strict';
import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
} from 'react-native';

class CustomButton extends React.Component {
  //
  // constructor(props) {
  //      super(props);
  //      this.state = {
  //          onPress: null,
  //          text:null
  //      }
  //  }
  //  componentDidMount() {
  //     //这里获取从FirstPageComponent传递过来的参数: passValue
  //     this.setState({
  //         onPress: this.props.onPress,
  //         text:this.props.text
  //     });
  // }

  render(){
    return(
      <TouchableOpacity onPress = {this.props.onPress}>
              <Text style = {this.props.style}>{this.props.text}</Text>
    </TouchableOpacity>
    );
  }
}
module.exports = CustomButton;
