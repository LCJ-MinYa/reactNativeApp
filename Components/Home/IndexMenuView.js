'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  ScrollView,
  Text
} from 'react-native';

var Dimensions = require('Dimensions');
var {width, height} = Dimensions.get('window');
var MenuListView = require('./MenuListView');
var MenuData = require('../../LocalData/TopMenu.json');

var IndexMenuView = React.createClass({
	getInitialState: function() {
		return {
			activePage: 0 
		};
	},
	render() {
	    return (
	    	<View style={styles.container}>
	    		{/*-- 内容 --*/}
	    		<ScrollView
	    			horizontal={true}
	    			pagingEnabled={true}
	    			showsHorizontalScrollIndicator={false}
	    			onMomentumScrollEnd={this.onScrollAnimationEnd}
	    		>
	    			{this.renderScrollItem()}
	    		</ScrollView>

	    		{/*-- 页码 --*/}
	    		<View style={styles.pageNumberStyle}>
	    			{this.pageNumber()}
	    		</View>
	    	</View>
	    );
  	},
  	renderScrollItem(){
  		//组件数组
  		var itemArr = [];
  		//颜色数组 --> 数据数组
  		//var colorArr = ['red','green'];
  		var dataArr = MenuData.data;
  		//遍历创建组件
  		for (var i = 0; i < dataArr.length; i++) {
  			itemArr.push(
  				<MenuListView
                    key={i}
  					dataArr={dataArr[i]}
  				/>
  			);
  		}
  		//返回数组
  		return itemArr;
  	},
  	pageNumber(){
  		//页码数组
  		var pageNumberArr = [], style;
  		//遍历创建组件
  		for (var i = 0; i < 2; i++) {
  			style = (i === this.state.activePage) ? {color: 'orange'} : {color: 'gray'}
  			pageNumberArr.push(
  				<Text key={i} style={[{fontSize: 25,paddingLeft: 4},style]}>&bull;</Text>
  			)
  		}
  		return pageNumberArr;
  	},
  	//切换时调用
  	onScrollAnimationEnd(e){
  		//求出当前页码
  		var currentPage = Math.floor(e.nativeEvent.contentOffset.x / width);
  		//更新页面
  		this.setState({
  			activePage: currentPage
  		})
  	}
});

const styles = StyleSheet.create({
	container:{
		backgroundColor: '#fff'
	},
	pageNumberStyle:{
		flexDirection: 'row',
		justifyContent: 'center'
	}
});


module.exports = IndexMenuView;