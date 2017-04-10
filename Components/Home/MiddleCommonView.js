'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';

var Dimensions = require('Dimensions');
var {width, height} = Dimensions.get('window');

var MiddleCommonView = React.createClass({
	getDefaultProps: function() {
		return {
			title: '',
			subTitle: '',
			rightIcon: '',
			titleColor: ''
		};
	},
	render() {
    	return (
    		<TouchableOpacity activeOpacity={1} onPress={()=>{alert('点击')}}>
	      		<View style={styles.container}>
	      			<View>
	      				<Text style={[{color: this.props.titleColor},styles.titleStyle]}>
	      				  	{this.props.title}
	      				</Text>
	      				<Text style={styles.subTitleStyle}>
	      					{this.props.subTitle}
	      				</Text>
	      			</View>
	      			<Image
	      			  style={{width: 64, height: 43, resizeMode: 'contain'}}
	      			  source={{uri: this.props.rightIcon}}
	      			/>
	      		</View>
      		</TouchableOpacity>
    	);
  	}
});

const styles = StyleSheet.create({
	container:{
		backgroundColor: '#fff',
		width: width*0.5-1,
		height: 59,
		marginBottom: 1,
		marginRight: 1,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-around'
	},
	titleStyle:{
		fontSize: 18,
		fontWeight: 'bold'
	},
	subTitleStyle:{
		color: 'gray',
		marginTop: 5
	}
});


module.exports = MiddleCommonView;