
'use strict';

import {
    Image,
    StyleSheet,
    Dimensions,
    PixelRatio,
}from 'react-native';


const {width, height} = Dimensions.get('window');

const ratio = 2;

const styles = StyleSheet.create({
  container: {
  flex: 1,
  backgroundColor: '#f2f2f2',
},
headView: {
  justifyContent:'center',
  alignItems:'center',
  flexDirection:'row',
  backgroundColor:'#e6454a',
  height: 64,
  paddingTop:20,
  alignItems:'center',
},
title: {
  fontSize:17,
  color:'#ffffff',
},
itemContainer: {
  flex: 1,
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#F5FCFF',
},
itemRightContainer: {
  flex: 1,
},
itemTitle: {
  fontSize: 20,
  marginBottom: 8,
  textAlign: 'center',
},
itemThumbnail: {
  width: 53,
  height: 81,
},
});


export default styles;
