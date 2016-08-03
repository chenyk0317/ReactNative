'use strict';

import React from 'react';
import {
    AppRegistry,
    View,
    Navigator,
    TouchableOpacity
} from 'react-native';

  import FirstPageComponent from './FirstPageComponent';
class TestRN extends React.Component {
  render() {
            let defaultName = 'FirstPageComponent';
            let defaultComponent = FirstPageComponent;
            return (
            <Navigator
              initialRoute={{ name: defaultName, component: defaultComponent }}
              configureScene={(route) => {
                return Navigator.SceneConfigs.VerticalDownSwipeJump;
              }}
              renderScene={(route, navigator) => {
                let Component = route.component;
                return <Component {...route.params} navigator={navigator} />
              }} />
            );
        }
}


// Module name
AppRegistry.registerComponent('TestRN', () => TestRN);
