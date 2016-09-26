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
import ListData from './data.js';
import DetailView from './DetailView.js';
import Style from './StyleCss.js';
export default class MyListView extends React.Component{
  constructor(props) {
        super(props);
        this.state = {
          dataSource:new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
          }),
        };

    }
    render() {
        return (
          <View style={Style.container}>
            <View style={Style.headView}>
              <Text style={Style.title}>RN学习</Text>
            </View>

            <ListView
                dataSource={this.state.dataSource}
                renderRow={this._renderRow.bind(this)}
            />
          </View>

      );
    }


    _renderRow(rowData,sectionid,rowid){
      return (
        <TouchableOpacity onPress={() => this.onClick(rowData,sectionid,rowid)}>
          <View style={Style.itemContainer}>
            <Image
              source={{uri: rowData.pic}}
              style={Style.itemThumbnail}
              />
            <View style={Style.itemRightContainer}>
              <Text style={Style.itemTitle}>{rowData.introduce}</Text>
            </View>
          </View>

        </TouchableOpacity>

              );
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
            title:'详情页'
        }
    });
}
    }
    componentWillMount(){

      let list = this.fetchListData();
      this.setState({
            dataSource: this.state.dataSource.cloneWithRows(list),
      });
    }
    componentDidMount(){

    }

    fetchListData(){
        let responseCode = ListData.code;
        if(responseCode == 0){
            //success

            let orderList = ListData.datas;
            return orderList;
        }
    }


}
module.exports = MyListView;
