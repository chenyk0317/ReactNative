'use strict';

import React from 'react';
import {
    AppRegistry,
    View,
    Navigator,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';

  import CustomButton from './CustomButton';

class TestRN extends React.Component {

      render() {
            return(
              <View style = {styles.style2}>
                <CustomButton text='我是自定义按钮' onPress = {this._pressButton.bind(this)} style = {styles.style1}>

                </CustomButton>
              </View>

                  );
                }

     _pressButton() {}

}

const styles = StyleSheet.create({
  style1:{
    alignSelf:'center',
    backgroundColor:'#87CEFA',
    fontSize:21,
  },
  style2:{
    flex:1,
    backgroundColor:'#00FFFF',
    justifyContent:'center',
    alignItems:'center',

  },
});
// Module name
AppRegistry.registerComponent('TestRN', () => TestRN);
