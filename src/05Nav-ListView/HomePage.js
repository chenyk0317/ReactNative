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
    Alert,
} from 'react-native';
import Nav from './Nav.js';
import Scroll from './Scrollview.js';
import ListView1 from './ListView.js';
import ListView2 from './ListView2.js';
import CallbackView from './CallBackView.js';
import NetView from './NetView.js';
import WeatherView from './WeatherView.js';
import LayoutView from './LayoutView.js';

export default class DetailView extends React.Component{
  constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
          <View  style= {styles.container}>
            <Nav  hiddenBack='1' title='综合练习'/>


            <View style={styles.blank}/>
            <TouchableOpacity  onPress={() => this.onClick(1)}>
            <View style={styles.row}>
              <Text style={styles.text} >ListView,tabar,菊花,综合练习 </Text>
            </View>
            </TouchableOpacity>


            <View style={styles.blank}/>
            <TouchableOpacity  onPress={() => this.onClick(2)}>
            <View style={styles.row}>
              <Text style={styles.text} >ScrollView使用</Text>
            </View>
            </TouchableOpacity>



            <View style={styles.blank}/>
            <TouchableOpacity  onPress={() => this.onClick(3)}>
            <View style={styles.row}>
              <Text style={styles.text} >ListView自适应行高</Text>
            </View>
            </TouchableOpacity>



            <View style={styles.blank}/>
            <TouchableOpacity  onPress={() => this.onClick(4)}>
            <View style={styles.row}>
              <Text style={styles.text} >回调 返回拦截</Text>
            </View>
            </TouchableOpacity>




            <View style={styles.blank}/>
            <TouchableOpacity  onPress={() => this.onClick(5)}>
            <View style={styles.row}>
              <Text style={styles.text} >网络请求</Text>
            </View>
            </TouchableOpacity>




            <View style={styles.blank}/>
            <TouchableOpacity  onPress={() => this.onClick(6)}>
            <View style={styles.row}>
              <Text style={styles.text} >天气小demo</Text>
            </View>
            </TouchableOpacity>


            <View style={styles.blank}/>
            <TouchableOpacity  onPress={() => this.onClick(7)}>
            <View style={styles.row}>
              <Text style={styles.text} >Layout 进阶</Text>
            </View>
            </TouchableOpacity>


          </View>
      );
    }



    onClick(i){
      //console.log(rowData);
      //alert('productId:'+rowData.productId);
      const { navigator } = this.props;
      if(navigator) {
        if (1 == i) {
          navigator.push({
          name: 'ListView1',
          component: ListView1,
          params: {
              title:'ListView',
          }});

        }
        if (2 == i) {
          navigator.push({
          name: 'Scroll',
          component: Scroll,
          params: {
              title:'ScrollView',

          }});
        }

        if (3 == i) {
          navigator.push({
          name: 'ListView2',
          component: ListView2,
          params: {
              title:'ListView',
          }});

        }


        if (4 == i) {
          navigator.push({
          name: 'CallbackView',
          component: CallbackView,
          params: {
              title:'CallbackView',
              callback:function(str){
                alert(str);
              },
            }
          });
        }


        if (5 == i) {
          navigator.push({
          name: 'NetView',
          component: NetView,
          params: {
              title:'网络请求',
          }});

        }
        if (6 == i) {
          navigator.push({
          name: 'WeatherView',
          component: WeatherView,
          params: {
              title:'WeatherView',
          }});

        }

        if (7 == i) {
          navigator.push({
          name: 'LayoutView',
          component: LayoutView,
          params: {
              title:'Layout 进阶',
          }});

        }


  }
}


    onClick2(){
      //console.log(rowData);
      //alert('productId:'+rowData.productId);
      const { navigator } = this.props;
      if(navigator) {
        navigator.push({
        name: 'ListView2',
        component: ListView2,
        params: {
            title:'ListView2',
            callback:function(str){
              alert(str);
            },
        }
    });
    }
    }
}


var styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },

  row:{
      backgroundColor:'#ffffff',
      flex:1,
      flexDirection:'column',
      justifyContent: 'center',
      height:50,
      //marginTop:30/ratio,
      //alignSelf:'center',
  },
  blank:{
    height:15,
    backgroundColor: '#f2f2f2',
  },
  text: {
    // borderRadius: 1,
    // borderWidth: 2,
    // backgroundColor: '#FF1492',
    marginLeft: 15,
    // marginRight: 15,
  },
});
