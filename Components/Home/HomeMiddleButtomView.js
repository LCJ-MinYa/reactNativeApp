'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
} from 'react-native';

var MiddleCommonView = require('./MiddleCommonView');
var Home_D4 = require('../../LocalData/XMG_Home_D4.json');

var HomeMiddleButtomView = React.createClass({
	render() {
    	return (
      		<View style={styles.container}>
                {/*上部分*/}
                <View style={styles.topViewStyle}></View>
                {/*下部分*/}
                <View style={styles.bottomViewStyle}>
                    {this.renderBottomItem()}
                </View>
            </View>
  	  	);
  	},
    renderBottomItem(){
        var itemArr = [];
        var dataArr = Home_D4.data;
        for (var i = 0; i < dataArr.length; i++) {
            var data = dataArr[i];
            itemArr.push(
                <MiddleCommonView
                    key={i}
                    title={data.maintitle}
                    subTitle={data.deputytitle}
                    rightIcon={this.dealWithImgUrl(data.imageurl)}
                    titleColor={data.typeface_color}
                />
            )
        }
        return itemArr;
    },
    dealWithImgUrl(url){
        if(url.search('w.h') == -1){
            return url;
        }else{
            return url.replace('w.h','120.90');
        }
    }
});

const styles = StyleSheet.create({
	container:{
		marginTop: 15,
	},
    topViewStyle:{

    },
    bottomViewStyle:{
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start'
    }
});


module.exports = HomeMiddleButtomView;