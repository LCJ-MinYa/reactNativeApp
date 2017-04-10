/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {
	Component
} from 'react';
import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	TextInput,
	Image,
	Platform,
	ScrollView,
} from 'react-native';

/*-- 导入外部组件类 --*/
var Dimensions = require('Dimensions');
var {width, height} = Dimensions.get('window');
var IndexMenuView = require('./IndexMenuView');
var HomeMiddleView = require('./HomeMiddleView');
var HomeMiddleButtomView = require('./HomeMiddleButtomView');
var ShopCenter = require('./ShopCenter');
var ShopDetailView = require('./ShopDetailView');
var RequestUrl = require('./RequestUrl');

var Home = React.createClass({
	render() {
		return (
			<View style={styles.container}>
				{/*--首页导航条--*/}
				{this.renderNavBar()}

				<ScrollView>
					{/*--菜单列表--*/}
					<IndexMenuView />

					{/*--中间的内容--*/}
					<HomeMiddleView />

					{/*--中间下半部分内容--*/}
					<HomeMiddleButtomView />

					{/*购物中心*/}
					<ShopCenter 
						popToHomeView = {(url,name)=> this.pushToShopCenterDetail(url,name)}
					/>

					{/*--测试网络请求--*/}
					<RequestUrl/>
				</ScrollView>
			</View>
		);
	},
	//首页导航条
	renderNavBar(){
		return(
			<View style={styles.navBarStyle}>
				<TouchableOpacity onPress={()=>{alert('点击事件')}}>
					<Text style={styles.navLeftText}>成都</Text>
				</TouchableOpacity>
				<TextInput
					placeholder="输入商家，品类，商圈"
					style={styles.topInputStyle}
				/>
				<View style={styles.navRightIcon}>
					<TouchableOpacity onPress={()=>{alert('点击事件')}}>
						<Image source={{uri:'icon_homepage_message'}} style={styles.navRightImgStyle, styles.navRightImgFirstStyle}/>
					</TouchableOpacity>
					<TouchableOpacity onPress={()=>{alert('点击事件')}}>
						<Image source={{uri:'icon_homepage_scan'}} style={styles.navRightImgStyle}/>
					</TouchableOpacity>
				</View>
			</View>
		)
	},
	//跳转到二级界面
	pushToDetail() {
		this.props.navigator.push({
			component: HomeDetail, //跳转板块
			title: '详情页'
		})
	},
	//跳转到购物中心详情页
	pushToShopCenterDetail(url,name){
		this.props.navigator.push({
			component: ShopDetailView, //跳转板块
			params: {
				url: this.dealWithUrl(url),
				name: name
			}
		})
	},
	//处理url
	dealWithUrl(url){
		return url.replace('imeituan://www.meituan.com/web/?url=', '');
	}
});

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#e8e8e8',
	},
	navBarStyle:{
		height: Platform.OS === 'ios' ? 64 : 44,
		backgroundColor: 'rgba(255, 96, 0, 1.0)',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-around',
	},
	navLeftText:{
		marginTop: Platform.OS === 'ios' ? 20 : 0,
		color: 'white',
		fontSize: 16,
		paddingLeft: 2
	},
	topInputStyle:{
		width: width * 0.7,
		height: 30,
		marginTop: Platform.OS === 'ios' ? 27 : 0,
		backgroundColor: 'white',
		borderRadius: 15,
		fontSize: 12,
		paddingLeft: 8,
		color: '#666',
	},
	navRightIcon:{
		marginTop: Platform.OS === 'ios' ? 20 : 0,
		flexDirection: 'row',
		alignItems: 'center',
	},
	navRightImgStyle:{
		width: 24,
		height: 24,
	},
	navRightImgFirstStyle:{
		marginRight: 5,
		width: 24,
		height: 24,
	}
});

module.exports = Home;