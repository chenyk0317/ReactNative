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
    Dimensions,
} from 'react-native';
import ListData from './data.js';
import DetailView from './DetailView.js';
import Style from './StyleCss.js';
import Nav from './Nav.js';
import Tab from './Tab.js';
import Ind from './Indicator.js';
const {width, height} = Dimensions.get('window');
const tabBarHeight = 80/2;
var productList;

import TimerMixin from 'react-timer-mixin';

export default class MyListView extends React.Component{
   mixins = [TimerMixin];
  constructor(props) {
        super(props);
        this.state = {
          dataSource:new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
          }),
          loaded: false,
        };

    }
    render() {

      let tabs = [
        {width:width /5 ,text:"全部"},
        {width:width /5,text:"好评"},
        {width:width /5,text:"中评"},
        {width:width /5,text:"差评"},
        {width:width /5,text:"未回复"},]

        var  contentView = this.state.loaded?(
          <ListView
                dataSource={this.state.dataSource}
                renderRow={this._renderRow.bind(this)}
            />
        ):(<Ind ref="indicator"/>)
        return (
          <View style={Style.container}>
            {/* <View style={Style.headView}>
              <Text style={Style.title}>RN学习</Text>
            </View> */}
            <Nav {...this.props}/>
            <Tab tabs={tabs} height={tabBarHeight} backgroundColor='#ffffff' callback={this._tabCallback.bind(this)}/>
            {contentView}
          </View>

      );
    }



    _renderRow(rowData,sectionid,rowid){
      return (
        <View>
          <TouchableOpacity onPress={() => this.onClick(rowData,sectionid,rowid)}>
            <View style={styles.rowContainer}>
              <View style={styles.productContainer}>
                <Image
                  source={{uri: rowData.pic}}
                  style={styles.productImage}
                  />
                <Text style={styles.productText}>{rowData.introduce}</Text>
              </View>
              <View style={styles.statusContainer}>
                  <View style={styles.cuttingline}></View>
                  <Text style={styles.statusText}>商品状态：{rowData.productStatusDesc}</Text>
              </View>
            </View>
          </TouchableOpacity>
          <View style = {styles.spaceRowContainer}></View>
        </View>

      );

  }

  _tabCallback(i) {
    // alert(i)
    productList = [];
    this.setState({loaded:false});
    this.fetchListData();
   }


    onClick(rowData,sectionId,rowId){

      //console.log(rowData);
      //alert('productId:'+rowData.productId);
      const { navigator } = this.props;
      if(navigator) {
        navigator.push({
        name: 'DetailView',
        component: DetailView,
        params: {
            data:rowData,
            title:'详情页',
            callback:function(str){
              alert(str);
            },
        }
    });
    }
    }

    testCallBack(p){
      alert(p);
    }
    componentWillMount(){

      this.fetchListData();
      this.setState({
            dataSource: this.state.dataSource.cloneWithRows(productList),
      });
    }
    componentDidMount(){

    }
    componentWillUnmount() {
       // 如果存在this.timer，则使用clearTimeout清空。
       // 如果你使用多个timer，那么用多个变量，或者用个数组来保存引用，然后逐个clear
       this.timer && clearTimeout(this.timer);
     }

    fetchListData(){
        let responseCode = ListData.code;
        if(responseCode == 0){
            //success
            productList = ListData.datas;
            setTimeout(
              () => this.setState({loaded: true}),
              300
            );

            // this.setState({loaded: true});
        }

    }


}

const styles = StyleSheet.create({

    rowContainer:{
        backgroundColor:'#ffffff',
        flex:1,
        flexDirection:'column',
        // justifyContent:'center',
        height:248/2,
        marginLeft:0,
        marginRight:0,
        //marginTop:30/ratio,
        //alignSelf:'center',
    },
    spaceRowContainer:{
        flex:1,
        backgroundColor: '#f2f2f2',
        height:15,
    },
    statusContainer:{
      flex:1,
      position:'absolute',
      height:30,
      bottom:0,
      right:0,
      left:0,
    },
    cuttingline:{
      height:1,
      backgroundColor: '#f2f2f2',
      marginLeft:0,
      marginRight:0,
    },
    statusText:{
      fontSize:28/2,
      color:'#333333',
      marginLeft:30/2,
      lineHeight:20,
      height:20,
    },
    productContainer:{
      flex:1,
      flexDirection:'row',
    },
    productImage:{
        marginTop:30/2,
        marginLeft:30/2,
        height:70,
        width:70,
    },
    productText:{
        marginTop:30/2,
        marginRight:30/2,
        fontSize:28/2,
        color:'#333333',
        width:250,
    },

    datetimeText:{
        fontSize:28/2,
        color:'#333333',
    },


    addressText:{
        fontSize:28/2,
        color:'#333333',
        marginTop:6/2,
    },

    serviceTypeBox:{
        borderWidth:1,
        fontSize:16/2,
        color:'#999999',
        borderColor:'#999999',
        padding:2/2,
        borderRadius:2,
    },
    productNumText:{
        fontSize:24/2,
        color:'#999999',
    },


});
module.exports = MyListView;
