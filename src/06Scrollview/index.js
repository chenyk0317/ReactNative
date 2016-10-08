'use strict';

import React from 'react';
import {
    AppRegistry,
    View,
    TouchableOpacity,
    Image,
    ScrollView,
    StyleSheet,
} from 'react-native';

var IMAGES = [
  'http://img.lanrentuku.com/img/allimg/1609/14747974667766.jpg',
  'http://img.lanrentuku.com/img/allimg/1609/14747974667766.jpg',
  'http://img.lanrentuku.com/img/allimg/1609/14747974667766.jpg',
  'http://img.lanrentuku.com/img/allimg/1609/14747974667766.jpg',
  'http://img.lanrentuku.com/img/allimg/1609/14747974667766.jpg',
  'http://img.lanrentuku.com/img/allimg/1609/14747974667766.jpg',
  'http://img.lanrentuku.com/img/allimg/1609/14747974667766.jpg',
  'http://img.lanrentuku.com/img/allimg/1609/14747974667766.jpg',
  'http://img.lanrentuku.com/img/allimg/1609/14747974667766.jpg',
  'http://img.lanrentuku.com/img/allimg/1609/14747974667766.jpg',
];
// Card视图
var Card = React.createClass({
  showToast(i) {
    alert(i);
  },

  render() {
    return (
      <TouchableOpacity
        style={styles.button}
        onPress={() => this.showToast(this.props.list)}>
        <View style={styles.blank}/>
        <Image
          style={styles.image}
          resizeMode={'cover'}
          source={{uri: this.props.img}}/>
        <View style={styles.blank}/>
      </TouchableOpacity>
    );
  }
});

var createCardRow = (img, i) => <Card key={i} img={img} num={i} list = {IMAGES}/>;

class TestRN extends React.Component {
  render() {
    var verticalScrollView = (
      <ScrollView /*horizontal={true}*/
        style={styles.container}>
        {IMAGES.map(createCardRow)}
      </ScrollView>
    );
    return verticalScrollView;
  }
}
var styles = StyleSheet.create({

  container: {
    flex: 1,
  },

  button: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    margin: 10,
  },

  image: {
    flex: 1,
    height: 200,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#FF1492',
  },

  blank: {
    width: 10,
    
  }
});


// Module name
AppRegistry.registerComponent('TestRN', () => TestRN);
