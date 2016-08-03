
'use strict';

import {
    Image,
    StyleSheet,
    Dimensions,
    PixelRatio,
}from 'react-native';


const {width, height} = Dimensions.get('window');

const ratio = 2;

const styles = StyleSheet.create({

    bgStyle1: {
        flex: 1,
        backgroundColor: '#FFC0CB',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    bgStyle2: {
        flex: 1,
        backgroundColor: '#87CEFA',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    view:{
      backgroundColor:'#FF8C00',
      width:600/ratio,
      height:300/ratio,
    }
});


export default styles;
