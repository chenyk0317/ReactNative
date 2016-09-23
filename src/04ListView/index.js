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

class TestRN extends React.Component {
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
          <ListView
              dataSource={this.state.dataSource}
              renderRow={this._renderRow.bind(this)}
          />
      );
    }


    _renderRow(rowData,sectionid,rowid){
      return (

              <View style={styles.item}>
                <View style={styles.topView}>
                  <Image
                    source={{uri: rowData.pic}}
                    style={styles.thumbnail}
                    />
                  <Text>{rowData.introduce}</Text>
                </View>
                <View style={styles.bottomView}>
                </View>
              </View>
              );
  }
    onClick(rowData,sectionId,rowId){
      console.log(rowData);
      alert('productId:'+rowData.productId);
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

const styles = StyleSheet.create({
                                 item: {
                                   height: 100,
                                   backgroundColor: '#FFFFFF',
                                 },
                                 topView:{
                                   height: 90,
                                   backgroundColor: '#FFFFFF',
                                   flexDirection:'row',
                                 },
                                 bottomView:{
                                   height: 10,
                                   backgroundColor: '#f2f2f2',
                                 },
                                 thumbnail: {
                                    width: 70,
                                    height: 70,
                                  },
                                 });

// Module name
AppRegistry.registerComponent('TestRN', () => TestRN);
