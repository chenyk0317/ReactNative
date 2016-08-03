//SecondPageComponent.js

import React from 'react';
import {
    View,
    Navigator,
    Text,
    TouchableOpacity
} from 'react-native';

import StyleCSS from './StyleCSS'

export default class SecondPageComponent extends React.Component {

    constructor(props) {
         super(props);
         this.state = {
             passValue: null
         }
     }
     componentDidMount() {
        //这里获取从FirstPageComponent传递过来的参数: passValue
        this.setState({
            passValue: this.props.passValue
        });
    }
    _pressButton() {
            const { navigator } = this.props;
            if(navigator) {
                navigator.pop();
            }
    }

    render() {
        return(
          <View style = {StyleCSS.bgStyle2}>
            <TouchableOpacity onPress={this._pressButton.bind(this)}>
              <View style={StyleCSS.view}>
                  <Text>获得的参数: ={ this.state.passValue }</Text>
                      <Text>点我跳回去</Text>
              </View>
            </TouchableOpacity>
          </View>
        );
    }
}
