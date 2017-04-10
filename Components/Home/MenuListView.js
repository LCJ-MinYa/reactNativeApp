'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Image,
  ListView,
  Text,
  TouchableOpacity
} from 'react-native';

var Dimensions = require('Dimensions');
var {width, height} = Dimensions.get('window');
var cellW = (width - width*0.1)/5;
var cellH = cellW*1.1;

var MenuListView = React.createClass({
	getDefaultProps: function() {
		return {
			dataArr: []
		};
	},
	getInitialState: function() {
		var ds = new ListView.DataSource({
			rowHasChanged:(row1, row2) => row1 !== row2
		})
		return {
			dataSource: ds.cloneWithRows(this.props.dataArr) 
		};
	},
	render() {
    	return (
      		<ListView 
      			contentContainerStyle={styles.contentViewStyle}
      			dataSource={this.state.dataSource}
      			renderRow={this.renderRow}
      			scrollEnabled={false}
      		/>
    	);
  	},
  	renderRow(rowdata){
  		return(
  			<TouchableOpacity onPress={()=>(alert('点击菜单'))}>
	  			<View style={styles.cellStyle}>
	  				<Image source={{uri: rowdata.image}} style={{width: 50,height: 50}} />
	  				<Text style={{fontSize: 12,color: '#333'}}>{rowdata.title}</Text>
	  			</View>
  			</TouchableOpacity>
  		)
  	}
})

const styles = StyleSheet.create({
	contentViewStyle:{
		flexWrap: 'wrap',
		alignItems: 'flex-start',
		flexDirection: 'row',
		width: width,
	},
	cellStyle:{
		width: cellW,
		height: cellH,
		alignItems: 'center',
		justifyContent: 'center',
		marginTop: 10,
		marginLeft: (width-cellW*5)/6,
	}
});


module.exports = MenuListView;