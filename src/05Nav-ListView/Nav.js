/**
 * add by yezhongxing
 */

'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';

const backImage  ='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAqCAYAAACpxZteAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3NpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpiYmZkMGJkZC01NjJkLTRhMTQtYjI1MS0zOWIwN2Y5ZWRhNTIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6REZGM0M4RUZCMDNCMTFFNTk0RTNBODM4MUQwN0I5RDYiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6REZGM0M4RUVCMDNCMTFFNTk0RTNBODM4MUQwN0I5RDYiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MDQ5YTk2NjEtOTRhMy00ODgxLWJjZDctMzA0ZWM2YjQ0YjA4IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOmJiZmQwYmRkLTU2MmQtNGExNC1iMjUxLTM5YjA3ZjllZGE1MiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Ph7G1G8AAAHsSURBVHjatJexL0NRFMZfS0QkTUglRA0WkTIwYGCqhak2JvwH5S9QRhsxsZWFrZ0IaYmwsJgMDCQkDE0kRJCK67ucEydN1WvfeTf5Na/v3fd9N/fde865jjHG8YEOcAi6AvaGcouCfRABOe2RD4C8+WlnIKwpHgNPJJ4Doe/ZURKPg1cSz4B6fqYhPgUKJL4BauVzr+IJ8EniKyBQ3MeLeNL8toW/+lUjHKDRGhp9olz/SsXt/KZI/ANM//dOJeJ2ZaRJ3K6YcTfvuRUP0do2tNZH3A7MTacwOCXxPO1WR8sgAi5I/A50V7ooyj3sBNckfkUR0tEy6AX3JH4OWqvdL6VuDoFHEj8BTV52e/GNUfBC4rugwWuskn8mwDuJb4M6jUjLF7O0M21bBzVaecL+zIugtVQqInohiLwZFPlUPUGz05yYojXtKWImxUfe0v7IzJhYpjvay5QZFhvtGDRqG1j6wIMIFS3aBhzsbsjkUjvYMe0iXN+CqLaBpZnKQE44/doGnDIPRMqMaRtw0s+IpB/XNuCyZZNMClQ2qhpw4bXqV+ElWRRROOmHAecRLn6XtYtfZkZE4lRxJNZKLLaMfCOTtPYBhLHl5DOZZLWPUMygOATacjPsxzG2B+yBNpD14xDOB/EjexD/EmAAYpto9t1ndgsAAAAASUVORK5CYII='
export default class Navigation extends Component {
  constructor(props) {
    super(props);

  }
  componentWillMount(){
  }
  back() {
    const { navigator } = this.props;
    if(navigator) {
      navigator.pop();
    }
  }

  onPressBack() {
    if (this.props.back) {
      this.props.back();
    }else {
      this.back();
    }
  }
  render() {
    let btn = this.props.hiddenBack === true ?
     <View />
    :(
      <TouchableOpacity onPress={this.onPressBack.bind(this)}>
        <Image source={{uri:backImage}} style={styles.image}/>
      </TouchableOpacity>);

    return (
      <View style={styles.container}>
        <View style={styles.leftView}>
          {btn}
        </View>

        <Text style={styles.title}>{this.props.title}</Text>

        <View  style={styles.rightView}>
          <TouchableOpacity>
            <View><Text style={styles.button}>{this.props.button}</Text></View>
          </TouchableOpacity>
        </View>



      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent:'space-between',
    flexDirection:'row',
    backgroundColor:'#e6454a',
    height: 64,
    paddingTop:20,
    alignItems:'center',
  },
  leftView:{
      marginLeft:0,
      width:50,
  },
  rightView:{
      marginRight:0,
      width:50,
  },
  image: {
    marginLeft:20,
    width:30/2,
    height:30/2,
  },
  title: {
    fontSize:34/2,
    color:'#ffffff',
  },
  button: {
    marginRight:20,
    color:'white'
  }
});
