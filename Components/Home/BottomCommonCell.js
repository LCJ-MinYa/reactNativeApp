'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity
} from 'react-native';

var BottomCommonCell = React.createClass({
	getDefaultProps: function() {
		return {
			leftIcon: '',
			leftTitle: '',
			rightTitle: ''
		};
	},
  	render() {
    	return (
      		<View style={styles.container}>
      			<View style={styles.leftView}>
      				<Image
      				  style={{width: 23, height: 23, marginRight: 5}}
      				  source={{uri: this.props.leftIcon}}
      				/>
      				<Text style={{fontSize: 16}}>
      					{this.props.leftTitle}
      				</Text>
      			</View>
      			<TouchableOpacity activeOpacity={0.8} onPress={()=>{alert('查看全部商家')}}>
	      			<View style={styles.rightView}>
	      				<Text style={{color: 'gray'}}>
	      					{this.props.rightTitle}
	      				</Text>
	      				<Image source={{uri: 'icon_cell_rightArrow'}} style={styles.cellArrowStyle} />
	      			</View>
      			</TouchableOpacity>
      		</View>
	  	);
  	}
})

const styles = StyleSheet.create({
	container:{
		height: 44,
		flexDirection: 'row',
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'space-between',
		borderBottomColor: '#e8e8e8',
		borderBottomWidth: 0.5
	},
	leftView:{
		flexDirection: 'row',
		alignItems: 'center',
		marginLeft: 8
	},
	rightView:{
		flexDirection: 'row',
		alignItems: 'center'
	},
	cellArrowStyle:{
		width: 8,
		height: 13,
		marginRight: 10,
		marginLeft: 5
	}
});


module.exports = BottomCommonCell;