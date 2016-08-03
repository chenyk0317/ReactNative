//FirstPageComponent.js
import React from 'react';
import {
    View,
    Navigator,
    TouchableOpacity,
    Text
} from 'react-native';

import SecondPageComponent from './SecondPageComponent';
import StyleCSS from './StyleCSS';

export default class FirstPageComponent extends React.Component {

    _pressButton() {
        const { navigator } = this.props;
        if(navigator) {
            navigator.push({
                name: 'SecondPageComponent',
                component: SecondPageComponent,
                params: {
                    passValue:'第一个界面的参数'
                }
            });
        }
    }

    render() {

            return(
              <View style = {StyleCSS.bgStyle1}>
                <TouchableOpacity onPress={this._pressButton.bind(this)}>
                <View style={StyleCSS.view}>
                        <Text>点击</Text>
                </View>
              </TouchableOpacity>
              </View>

            );
    }
}
