'use strict';

import React from 'react';
import {
    AppRegistry,
    View,
    Navigator,
    TouchableOpacity
} from 'react-native';

import HomePage from './HomePage.js';

const NoBackSwipe = {
  ...Navigator.SceneConfigs.PushFromRight,
    gestures: {
      pop: {}
    }
};
class TestRN extends React.Component {
  render() {
            let defaultName = 'HomePage';
            let defaultComponent = HomePage;
            return (
            <Navigator
              initialRoute={{ name: defaultName, component: defaultComponent }}
              configureScene={(route) => {
                // return Navigator.SceneConfigs.PushFromRight;
                return NoBackSwipe;
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
