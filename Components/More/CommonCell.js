'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  Switch,
} from 'react-native';

var CommonCell = React.createClass({
	getDefaultProps(){
		return{
			title: '',
			isSwitch: false,
			rightTitle: '',
		}
	},
	getInitialState(){
		return{
			isOn: false,
		}
	},
  	render() {
    	return (
    		<TouchableOpacity onPress={()=> {alert('点击了cell')}}>
	      		<View style={styles.container}>
	      			<Text style={styles.leftText}>{this.props.title}</Text>
	      			{this.renderRightView()}
	      		</View>
      		</TouchableOpacity>
    	);
  	},
  	renderRightView(){
  		if(this.props.isSwitch){
  			return(
  				<Switch 
  					value={this.state.isOn === true}
  					onValueChange={()=>{this.setState({
  						isOn: !this.state.isOn
  					})}}
  					style={{marginRight: 10}}
  					onTintColor='#ff5e11'
  				/>
  			)
  		}else{
  			return(
  				<View style={{flexDirection: 'row', alignItems: 'center'}}>
  					{this.rightTitle()}
  					<Image source={{uri: 'icon_cell_rightArrow'}} style={styles.cellArrowStyle} />
  				</View>
  			)
  		}
  	},
  	rightTitle(){
  		if(this.props.rightTitle.length > 0){
  			return(
  				<Text style={{color: 'gray', marginRight: 3}}>{this.props.rightTitle}</Text>
  			)
  		}
  	}
})

const styles = StyleSheet.create({
	container:{
		height: 44,
		backgroundColor: 'white',
		borderBottomColor: '#ddd',
		borderBottomWidth: 0.5,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	leftText:{
		marginLeft: 10,
	},
	cellArrowStyle:{
		width: 8,
		height: 13,
		marginRight: 10,
	}
});


module.exports = CommonCell;