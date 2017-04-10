'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity
} from 'react-native';

var CommonMyCell = React.createClass({
	getDefaultProps: function() {
		return {
			leftIconName: '',
			leftTitle: '',
			rightIconName: '',
			rightTitle: '',
		}
	},
	render(){
		return(
			<TouchableOpacity onPress={()=>{alert('点击cell')}}>
				<View style={styles.container}>
					<View style={styles.leftView}>
						<Image style={styles.leftImageStyle} source={{uri: this.props.leftIconName}} />
						<Text style={styles.leftTitleStyle}>{this.props.leftTitle}</Text>
					</View>
					{this.rightSubView()}
				</View>
			</TouchableOpacity>
		)
	},
	rightSubView(){
		return(
			<View style={{flexDirection: 'row', alignItems: 'center'}}>
				{this.renderRightContent()}
				<Image source={{uri: 'icon_cell_rightArrow'}} style={styles.mineArrowStyle} />
			</View>
		)
	},
	renderRightContent(){
		if(this.props.rightIconName.length == 0){
			return(
				<Text style={{color: 'gray'}}>{this.props.rightTitle}</Text>
			)
		}else{
			return(
				<Image source={{uri: this.props.rightIconName}} style={{width: 24, height: 13}}/>
			)
		}
	}
});

const styles = StyleSheet.create({
	container:{
		height: 44,
		flexDirection: 'row',
		justifyContent: 'space-between',
		backgroundColor: '#fff',
		alignItems: 'center',
		borderBottomColor: '#e8e8e8',
		borderBottomWidth: 0.5
	},
	leftView:{
		flexDirection: 'row',
		alignItems: 'center',
		marginLeft: 8
	},
	leftImageStyle:{
		width: 24,
		height: 24,
		borderRadius: 12,
		marginRight: 6
	},
	leftTitleStyle:{

	},
	mineArrowStyle:{
		width: 8,
		height: 13,
		marginRight: 10,
		marginLeft: 8
	}
});


module.exports = CommonMyCell;

