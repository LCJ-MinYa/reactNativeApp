'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity
} from 'react-native';

var Dimensions = require('Dimensions');
var {width, height} = Dimensions.get('window');
var MiddleCommonView = require('./MiddleCommonView');
var TopMiddleData = require('../../LocalData/HomeTopMiddleLeft.json');

var HomeMiddleView = React.createClass({
	render() {
    	return (
      		<View style={styles.container}>
      			{/*左边*/}
      			{this.renderLeftView()}
      			{/*右边*/}
      			<View>
      			{this.renderRightView()}
      			</View>
      		</View>
    	);
  	},
  	renderLeftView(){
        var data = TopMiddleData.dataLeft[0];
        return(
            <TouchableOpacity onPress={()=>{alert('点击')}}>
                <View style={styles.leftViewStyle}>
                    <Image
                      style={styles.leftImageStyle}
                      source={{uri: data.img1}}
                    />
                    <Image
                      style={styles.leftImageStyle}
                      source={{uri: data.img2}}
                    />
                    <Text style={{color: 'gray'}}>
                        {data.title}
                    </Text>
                    <View style={{flexDirection: 'row',marginTop: 5}}>
                        <Text style={{color: 'blue',marginRight: 5}}>
                            {data.price}
                        </Text>
                        <Text style={{color: 'orange',backgroundColor: 'yellow'}}>
                            {data.sale}
                        </Text>
                    </View>    
                </View>
            </TouchableOpacity>
        )
  	},
  	renderRightView(){
  		var itemArr = [];
  		var rightData = TopMiddleData.dataRight;
  		for (var i = 0; i < rightData.length; i++) {
  			var data = rightData[i];
  			itemArr.push(
  				<MiddleCommonView
  					key={i}
  					title={data.title}
  					subTitle={data.subTitle}
  					rightIcon={data.rightImage}
  					titleColor={data.titleColor}
  				/>
  			)
  		}
  		return itemArr;
  	}
});

const styles = StyleSheet.create({
	container:{
		marginTop: 15,
        flexDirection: 'row',
	},
    leftViewStyle:{
        backgroundColor: '#fff',
        width: width*0.5,
        height: 119,
        marginRight: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    leftImageStyle:{
        width: 120,
        height: 30,
        resizeMode: 'contain'
    }
});


module.exports = HomeMiddleView;