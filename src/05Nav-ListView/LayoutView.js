'use strict';

import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
} from 'react-native';
import Nav from './Nav.js';

export default class LayoutView extends React.Component{
  constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
          <View  style= {styles.container}>
            <Nav  {...this.props}  ref='nav'/>


              <ScrollView>
                  {/*
                    ======== 容器属性========
                    flexDirection 主轴的排列方式
                        'row'  主轴横轴排列
                        'column'  主轴纵向排列 默认

                    flexWrap  主轴方向是否折行显示
                        'nowrap'  不折行
                        'wrap'  折行

                    justifyContent 主轴方向的布局开始位置
                        'flex-start'  主轴的开端
                        'center'  主轴的居中
                        'flex-end' 主轴的末端
                        'space-between' 项目分散布局，间隔相等
                        'space-around' 项目分散布局，间隔相等，包括开始前的间隔和结束后的间隔

                    alignItems: 交叉轴的对齐方式
                        'flex-start' 交叉轴的开端
                        'flex-end' 交叉轴的末端
                        'center' 居中
                        'stretch'

                  ======== 元素属性========
                    flex  布局权重 1 2 3 按比例
                        0 不占满空间
                        1 占满空间

                    alignSelf 交叉轴自身对齐方式
                        'flex-start' 交叉轴的开端
                        'flex-end'  交叉轴的末端

                  */}
                  <View style={styles.row}>
                    <View style={{flex:1,flexDirection:'row',flexWrap:'wrap',alignItems:'flex-start',justifyContent:'space-around'}}>

                      <View style={{backgroundColor:'#8DEEEE',height:70,flex:1,alignSelf:'flex-start'}}></View>

                      <View style={{backgroundColor:'#9400D3',height:70,flex:2,alignSelf:'flex-end'}}></View>

                      <View style={{backgroundColor:'#EE0000',height:70,flex:1,alignSelf: 'center'}}></View>
                    </View>
                  </View>
                  <View style={{backgroundColor:'#ffffff',height:30}}/>


                    {/*
                      margin
                      marginLeft 外边距左  row 从左边开始布局、或者左右两端分散布局 有效果
                      marginTop 外边距上   column 从上开始布局的、或者上下两端分散布局的 有效果
                      marginRight 外边距右  row 从右边开始布局、或者左右两端分散布局 有效果
                      marginBottom 外边距下  column 从下开始布局的、或者上下两端分散布局的 有效果
                       */}

                    <View style={{flex:1,flexDirection:'row',height:100,backgroundColor:'#FFEFDB',justifyContent:'space-between',alignItems:'flex-end'}}>

                      <Text style={{backgroundColor:'#8DEEEE',height:30,width:70,marginLeft:15,marginTop:30}} >margin</Text>
                      <Text style={{backgroundColor:'#8DEEEE',height:30,width:70,marginRight:15,marginBottom:30}} >margin</Text>

                    </View>
                  <View style={{backgroundColor:'#ffffff',height:30}}/>


                    {/*
                      padding
                      paddingLeft 内距左  row 从左边开始布局、或者左右两端分散布局 有效果
                      paddingTop 内距上   column 从上开始布局的、或者上下两端分散布局的 有效果
                      paddingRight 内距右  row 从右边开始布局、或者左右两端分散布局 有效果
                      paddingBottom 内距下  column 从下开始布局的、或者上下两端分散布局的 有效果
                       */}

                    <View style={{flex:1,flexDirection:'row',height:100,backgroundColor:'#FFEFDB',paddingLeft:10,paddingRight:10,paddingTop:10,justifyContent:'space-between'}}>

                      <Text style={{backgroundColor:'#8DEEEE',height:30,width:120,paddingLeft:15}} >padding</Text>
                      <Text style={{backgroundColor:'#8DEEEE',height:30,width:120,paddingLeft:15}} >padding</Text>

                    </View>
                  <View style={{backgroundColor:'#ffffff',height:30}}/>


                    {/*
                      position
                        'absolute' 脱离文档流，通过 top,bottom,left,right 定位。选取其最近一个最有定位设置的父级对象进行绝对定位，如果对象的父级没有设置定位属性，absolute元素将以body坐标原点进行定位
                        'relative' 对象不可层叠、不脱离文档流，参考自身静态位置通过 top,bottom,left,right 定位
                       */}

                    <View style={{flex:1,flexDirection:'row',height:100,backgroundColor:'#FFEFDB'}}>

                      <Text style={{backgroundColor:'#8DEEEE',height:30,width:120,position:'absolute',bottom:10,right:20}} >absolute</Text>
                      <Text style={{backgroundColor:'#8DEEEE',height:30,width:120,left:20,bottom:-20}} >relative</Text>

                    </View>
                  <View style={{backgroundColor:'#ffffff',height:30}}/>







              </ScrollView>
          </View>
      );
    }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
},
 row:{
   flex:1,
   height:100,
 },
});
