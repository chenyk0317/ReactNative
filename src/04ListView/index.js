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
        <TouchableOpacity onPress={() => this.onClick(rowData,sectionid,rowid)}>
          <View style={styles.container}>
            <Image
              source={{uri: rowData.pic}}
              style={styles.thumbnail}
              />
            <View style={styles.rightContainer}>
              <Text style={styles.title}>{rowData.introduce}</Text>
            </View>
          </View>

        </TouchableOpacity>

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
var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  rightContainer: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    marginBottom: 8,
    textAlign: 'center',
  },
  year: {
    textAlign: 'center',
  },
  thumbnail: {
    width: 53,
    height: 81,
  },
  listView: {
    paddingTop: 20,
    backgroundColor: '#F5FCFF',
  },
});

// Module name
AppRegistry.registerComponent('TestRN', () => TestRN);
