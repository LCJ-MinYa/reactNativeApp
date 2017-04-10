'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
  Text,
  Image
} from 'react-native';

var BottomCommonCell = require('./BottomCommonCell.js');
var Home_D5 = require('../../LocalData/XMG_Home_D5.json');

var ShopCenter = React.createClass({
	getDefaultProps: function() {
		//回调函数
		return {
			popToHomeView: null
		};
	},
	render() {
    	return (
	      		<View style={styles.container}>
	      			<BottomCommonCell
	      				leftIcon="gw"
	      				leftTitle="购物中心"
	      				rightTitle={Home_D5.tips}
	      			/>
		      		<ScrollView 
		      			style={styles.scrollViewStyle}
		      			horizontal={true}
		      			showsHorizontalScrollIndicator={false}
		      		>
		      			{this.renderAllItem()}
		      		</ScrollView>
	      		</View>
    	);
  	},
  	renderAllItem(){
  		var itemArr = [];
  		var dataArr = Home_D5.data;
  		for (var i = 0; i < dataArr.length; i++) {
  			var data = dataArr[i];
  			itemArr.push(
  				<ShopCenterItem
  					shopImage={data.img}
  					shopSale={data.showtext.text}
  					shopName={data.name}
  					key={i}
  					detailurl={data.detailurl}
  					popToShopCenter={(url,name)=>this.popToHome(url,name)}
  				/>
  			)
  		}
  		return itemArr;
  	},
  	popToHome(url,name){
		//判断
		if(this.props.popToHomeView == null){
			return;
		}
		//执行回调函数
		this.props.popToHomeView(url,name);  		
  	}
});

var ShopCenterItem = React.createClass({
	getDefaultProps: function() {
		return {
			shopImage: '',
			shopSale: '',
			shopName: '',
			detailurl: '',
			popToShopCenter: {
				url: '',
				name: ''
			}
		};
	},
	render(){
		return(
			<TouchableOpacity activeOpacity={0.8} onPress={()=>this.clickItem(this.props.detailurl, this.props.shopName)}>
				<View style={styles.itemViewStyle}>
					<Image
					  style={styles.imageStyle}
					  source={{uri: this.props.shopImage}}
					/>
					<Text style={styles.shopSaleStyle}>
						{this.props.shopSale}
					</Text>
					<Text style={styles.shopNameStyle}>
						{this.props.shopName}
					</Text>
				</View>
			</TouchableOpacity>
		);
	},
	clickItem(url,name){
		//判断
		if(this.props.detailurl == null){
			return;
		}

		//执行回调函数
		this.props.popToShopCenter(url,name);
	}
});

const styles = StyleSheet.create({
	container:{
		marginTop: 15
	},
	imageStyle:{
		width: 120,
		height: 100,
		borderRadius: 8
	},
	scrollViewStyle:{
		flexDirection: 'row',
		backgroundColor: '#fff',
		padding: 10,
	},
	itemViewStyle:{
		margin: 8
	},
	shopSaleStyle:{
		position: 'absolute',
		left: 0,
		bottom: 30,
		backgroundColor: 'orange',
		color: '#fff',
		padding: 3,
		borderTopRightRadius: 8,//是否支持
		borderBottomRightRadius: 8,//是否支持
		fontSize: 12
	},
	shopNameStyle:{
		textAlign: 'center',
		marginTop: 5
	}
});


module.exports = ShopCenter;