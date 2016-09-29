'use strict';

import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    ActivityIndicator,
    TouchableOpacity,
    Image,
} from 'react-native';

import Nav from './Nav.js';
import Tab from './Tab.js';
import Ind from './Indicator.js';
import Util from './Util.js';

const closeImage = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAE4AAABOCAYAAACOqiAdAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6M0RBRjJERkEyRUREMTFFNkJBQzFGMzgyNkZDMjE5ODQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6M0RBRjJERkIyRUREMTFFNkJBQzFGMzgyNkZDMjE5ODQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDozREFGMkRGODJFREQxMUU2QkFDMUYzODI2RkMyMTk4NCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDozREFGMkRGOTJFREQxMUU2QkFDMUYzODI2RkMyMTk4NCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PoylWYgAAAeASURBVHja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'
var data;

export default class NetView extends React.Component{
  constructor(props) {
        super(props);
        this.state = {
          loading:true,
        };

    }
    render() {
        var  contentView = this.state.loading?(
          <View style={styles.container}>
            <ActivityIndicator
              animating={this.state.loading}
              style={{marginTop: (Util.size.height -64)/2-30}}
              size="small"
            />
          </View>

        ):(
            <Image  style={{width:(Util.size.width),height:(Util.size.height)}}  source={{uri:data.backgroundImg}}>

              <View style={styles.titleView}>
                <View style={{  marginLeft:0,width:110}}>
                  <TouchableOpacity onPress={() => this.back()}>
                  <Image style={{  marginLeft:15,width:20,height:20}} source={{uri:closeImage}} ></Image>
                  </TouchableOpacity>
                </View>
                <Text style={styles.title}>{data.area}</Text>
                <View style={{marginRight:15,width:110}}>
                  <Text style={{ textAlign:'right',fontSize:12,color:'#ffffff'}}>{data.updateTime}</Text>
                </View>
              </View>

              <View style={{justifyContent:'center',flexDirection:'column',height: 90}}>
                <Text style={{ textAlign:'center',fontSize:35,color:'#ffffff'}} >{data.date}</Text>
                <View style={{justifyContent:'center',flexDirection:'row',marginTop:5}} >
                  <Text style={{ textAlign:'center',fontSize:14,color:'#ffffff'}} >{data.weekday} {data.lunar}</Text>
                </View>
              </View>

              <View style={{flexDirection:'row',justifyContent:'center',height:70,alignItems:'center'}}>
                <Text style={{textAlign:'center',fontSize:30,color:'#ffffff',fontFamily:'HelveticaNeue-Thin'}}>{data.currentWeather.temp}</Text>
                <View style={{backgroundColor:'#ffffff',width:0.25,height:30,marginLeft:8}}/>
                <View style={{flexDirection:'column',justifyContent:'space-between',marginLeft:8}}>
                  <Text style={{fontSize:11,color:'#ffffff',textAlign:'left'}}>{data.currentWeather.description}</Text>
                  <Text style={{fontSize:11,color:'#ffffff',textAlign:'left'}}>{data.currentWeather.wind}</Text>
                </View>
              </View>

              <View style={{flexDirection:'column',height:45}}>
                <View style={{height:0.5,backgroundColor:'#ffffff'}}></View>
                <View style={{height:44,flexDirection:'row'}}>
                <View style={{width:(Util.size.width)/2,flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                  <Text style={{fontSize:14,color:'#ffffff',marginLeft:15}}>{(data.futureWeather[0]).text}</Text>
                  <Text style={{fontSize:14,color:'#ffffff',marginRight:15}}>{(data.futureWeather[0]).tempRange}</Text>
                </View>
                <View style={{width:0.5,backgroundColor:'#ffffff'}}></View>
                <View style={{width:(Util.size.width)/2-0.5,flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                  <Text style={{fontSize:14,color:'#ffffff',marginLeft:15}}>{(data.futureWeather[1]).text}</Text>
                  <Text style={{fontSize:14,color:'#ffffff',marginRight:15}}>{(data.futureWeather[1]).tempRange}</Text>
                </View>
                </View>
                <View style={{height:0.5,backgroundColor:'#ffffff'}}></View>
              </View>

              <View style={{height:150,flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                <Text style={{color:'#ffffff',fontSize:30}}>下面不想写了</Text>
              </View>
            </Image>

        )
        return (
            contentView
      );
    }

    back(){
      const { navigator } = this.props;
      if(navigator) {
        navigator.pop();
      }
    }
    componentWillMount(){
      this.fetchListData();
    }
    componentDidMount(){
    }
    componentWillUnmount() {

     }

    fetchListData(){

      // alert('fetchListData');

      var that = this;
      Util.get("https://jzt32.daojia.com/api/guest/lifecalendar",function(text){


        let responseCode = text.code;
        if(responseCode == 0){
          data = text.data;
          that.setState({loading: false})
        }

      },function(err){
        console.error(err);
        // alert("失败");
      });

    }
}

const styles = StyleSheet.create({
  container: {
  flex: 1,
  backgroundColor: '#f2f2f2',
},

titleView: {
  justifyContent:'space-between',
  flexDirection:'row',
  height: 64,
  paddingTop:20,
  alignItems:'center',
},

rightTitleView:{
    marginRight:0,
    width:50,
},

title: {
  fontSize:17,
  color:'#ffffff',
},
button: {
  marginRight:20,
  color:'white'
},
});
