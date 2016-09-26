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
} from 'react-native';
import Style from './StyleCss.js';
import Nav from './Nav.js';
export default class DetailView extends React.Component{
  constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
          <View  style= {Style.container}>
            <Nav  {...this.props}/>
            <Text>{this.props.data.introduce}</Text>
          </View>
      );
    }


    componentWillMount(){


    }
    componentDidMount(){

    }


}
