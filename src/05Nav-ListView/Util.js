
var React = require('react-native');
var Dimensions = require('Dimensions');

var{
    PixelRatio,
} = React;

module.exports ={
  pixel:1/PixelRatio.get(),
  size:{
    width:Dimensions.get('window').width,
    height:Dimensions.get('window').height
  },

  get:function(url,successCallback,failCallback){
    fetch(url)
    .then((response)=> response.text())
    .then((responseText)=>{
      successCallback(JSON.parse(responseText));
      //successCallback(responseText);
    })
    .catch(function(err){
      failCallback(err);
    });
  },
}
