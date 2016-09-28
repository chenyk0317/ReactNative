'use strict';

import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    ScrollView,
} from 'react-native';

// Card视图
var Card = React.createClass({
  showToast(i) {
    alert(i);
  },

  render() {
    return (
      <View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.showToast(this.props.num)}>
          <Image
            style={styles.image}
            resizeMode={'cover'}
            source={{uri: this.props.img}}/>
        </TouchableOpacity>
      </View>

    );
  }
});

var createCardRow;
export default class ScrollImageView extends React.Component{
  constructor(props) {
        super(props);
        this.state = {
        };
      createCardRow =(img, i) => <Card key={i} img={img} num={i} list = {this.props.list}/>
    // alert(this.props.list);
    }
    render() {
      var verticalScrollView = (
        <ScrollView horizontal={true}>
          {this.props.list.map(createCardRow)}
        </ScrollView>
      );
      return verticalScrollView;
    }
}


var styles = StyleSheet.create({

  container: {
    // flex: 1,
    height: 90,
    backgroundColor:'#ffffff',
    // flexDirection: 'row',
  },

  image: {
    flex: 1,
    height: 70,
    width: 70,
    // borderRadius: 1,
    // borderWidth: 2,
    // borderColor: '#FF1492',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginLeft: 10,
    marginTop: 10,
  },
});
