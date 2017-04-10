'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity
} from 'react-native';

var ScrollListView = React.createClass({
	getDefaultProps: function() {
		return {
			topIcon: '',
			bottomText: '',
		};
	},
	render() {
		return (
			<TouchableOpacity onPress={()=>{alert('点击列表')}} style={styles.scrollListStyle}>
	    		<View style={styles.scrollListStyle}>
	    			<Image source={{uri: this.props.topIcon}} style={styles.topIconStyle} />
	    			<Text style={{marginTop: 5,fontSize: 12}}>{this.props.bottomText}</Text>
	    		</View>
    		</TouchableOpacity>
    	);
  	}
})

const styles = StyleSheet.create({
	scrollListStyle:{
		alignItems: 'center',
		justifyContent: 'center',
		flex: 1
	},
	topIconStyle:{
		width: 30,
		height: 20,
	}
});


module.exports = ScrollListView;