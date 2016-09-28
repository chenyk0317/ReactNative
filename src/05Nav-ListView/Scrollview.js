'use strict';

import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    ListView,
    TouchableOpacity,
    Image,
    ScrollView,
} from 'react-native';
import Style from './StyleCss.js';
import Nav from './Nav.js';
import ScrollImageView from './ScrollImageView.js';


var IMAGES = [
  'http://img.lanrentuku.com/img/allimg/1609/14747974667766.jpg',
  'http://image78.360doc.com/DownloadImg/2014/09/1613/45320433_18.jpg',
  'http://photo.enterdesk.com/2011-6-26/enterdesk.com-1C30BB1578426FF3FE6FEEA3D3E4E816.jpg',
  'http://image78.360doc.com/DownloadImg/2014/08/1916/44428854_9.jpg',
  'http://imgstore.cdn.sogou.com/app/a/100540002/527471.jpg',
  'http://img.lanrentuku.com/img/allimg/1609/14747974667766.jpg',
  'http://image78.360doc.com/DownloadImg/2014/09/1613/45320433_18.jpg',
  'http://photo.enterdesk.com/2011-6-26/enterdesk.com-1C30BB1578426FF3FE6FEEA3D3E4E816.jpg',
  'http://image78.360doc.com/DownloadImg/2014/08/1916/44428854_9.jpg',
  'http://imgstore.cdn.sogou.com/app/a/100540002/527471.jpg',
];

export default class Scroll extends React.Component{
  constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
      var verticalScrollView = (
        <ScrollImageView list={IMAGES} ></ScrollImageView>

      );
      return (
        <View  style= {Style.container}>
          <Nav  {...this.props}/>
          <View style={styles.container}>
            {verticalScrollView}
          </View>
          <View style={styles.container}>
            {verticalScrollView}
          </View>
          <View style={styles.container}>
            {verticalScrollView}
          </View>
        </View>
      );
    }
}


var styles = StyleSheet.create({

  container: {
    // flex: 1,
    height: 90,
    backgroundColor:'#ffffff',
    // flexDirection: 'row',
  },
});
