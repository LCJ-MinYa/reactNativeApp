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
	Image,
	Platform,
	ScrollView,
} from 'react-native';

var Dimensions = require('Dimensions');
var {width, height} = Dimensions.get('window');
var CommonMyCell = require('./CommonMyCell');
var ScrollListView = require('./ScrollListView');

var Mine = React.createClass({
	render(){
		return(
			<View style={styles.container}>
				{/*-- header --*/}
				<View style={styles.mineBox}>
					{/*-- msg --*/}
					{this.renderMineMsg()}
					{/*-- list --*/}
					{this.renderMineList()}
				</View>

				<ScrollView>
					<View>
						<CommonMyCell
							leftIconName= 'collect'
							leftTitle= '我的订单'
							rightTitle= '查看全部订单'
						/>
						<View style={styles.ScrollListViewStyle}>
							<ScrollListView 
								topIcon= 'order1'
								bottomText= '待付款'
							/>
							<ScrollListView 
								topIcon= 'order2'
								bottomText= '待使用'
							/>
							<ScrollListView 
								topIcon= 'order3'
								bottomText= '待评价'
							/>
							<ScrollListView 
								topIcon= 'order4'
								bottomText= '退款/售后'
							/>
						</View>
					</View>
					<View style={{marginTop: 15}}>
						<CommonMyCell
							leftIconName= 'draft'
							leftTitle= '我的钱包'
							rightTitle= '账户余额:¥100'
						/>
						<CommonMyCell
							leftIconName= 'like'
							leftTitle= '抵用券'
							rightTitle= '10张'
						/>
					</View>

					<View style={{marginTop: 15}}>
						<CommonMyCell
							leftIconName= 'card'
							leftTitle= '积分商城'
						/>
					</View>

					<View style={{marginTop: 15}}>
						<CommonMyCell
							leftIconName= 'new_friend'
							leftTitle= '今日推荐'
							rightIconName= 'me_new'
						/>
					</View>

					<View style={{marginTop: 15}}>
						<CommonMyCell
							leftIconName= 'pay'
							leftTitle= '我要合作'
							rightIconName= '轻松开店，招财进宝'
						/>
					</View>			
				</ScrollView>
			</View>
		);
	},
	renderMineMsg(){
		return(
			<View style={styles.mineMsgBox}>
				<View style={styles.mineMsgLeftBox}>
					<View style={styles.mineLogoBox}><Image source={{uri:'see'}} style={styles.mineLogo} /></View>
					<Text style={styles.mineName}>吃饭睡觉打豆豆</Text>
					<Image source={{uri: 'avatar_vip'}} style={styles.mineVip}/>
				</View>
				<Image source={{uri: 'icon_cell_rightArrow'}} style={styles.mineArrowStyle} />
			</View>
		)
	},
	renderMineList(){
		return(
			<View style={styles.mineListBox}>
				<View style={styles.mineListLine}>
					<Text style={styles.mineListTextColor}>100</Text>
					<Text style={styles.mineListTextTop}>美团券</Text>
				</View>
				<View style={styles.mineListLine}>
					<View style={styles.mineListBorder}>
						<Text style={styles.mineListTextColor}>12</Text>
						<Text style={styles.mineListTextTop}>评价</Text>
					</View>
				</View>
				<View style={styles.mineListLine}>
					<Text style={styles.mineListTextColor}>50</Text>
					<Text style={styles.mineListTextTop}>收藏</Text>
				</View>	
			</View>
		)
	}
});

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#e8e8e8',
	},
	mineBox:{
		height: Platform.OS === 'ios' ? 174 : 154,
		backgroundColor: 'rgba(255, 96, 0, 1.0)',
	},
	mineMsgBox:{
		height: 64,
		flexDirection: 'row',
		marginTop: Platform.OS === 'ios' ? 50 : 30,
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	mineMsgLeftBox:{
		flexDirection: 'row',
		alignItems: 'center',
	},
	mineLogoBox:{
		width: 64,
		height: 64,
		borderRadius: 32,
		borderWidth: 2,
		borderColor: 'rgba(255, 255, 255, 0.5)',
		marginLeft: 10
	},
	mineLogo:{
		width: 60,
		height: 60,
		borderRadius: 30,
	},
	mineName:{
		color: '#fff',
		marginLeft: 5
	},
	mineVip:{
		width: 13,
		height: 13,
	},
	mineArrowStyle:{
		width: 8,
		height: 13,
		marginRight: 10,
	},
	mineListBox:{
		marginTop: 10,
		height: 50,
		backgroundColor: 'rgba(255, 255, 255, 0.3)',
		flexDirection: 'row',
	},
	mineListLine:{
		justifyContent: 'center',
		alignItems: 'center',
		flex: 1
	},
	mineListTextColor:{
		color: '#fff'
	},
	mineListTextTop:{
		marginTop: 5,
		color: '#fff'
	},
	mineListBorder:{
		height: 36,
		marginTop: 7,
		marginBottom: 7,
		borderRightColor: '#fff',
		borderRightWidth: 0.5,
		borderLeftColor: '#fff',
		borderLeftWidth: 0.5,
		justifyContent: 'center',
		alignItems: 'center',
		width: width / 3
	},
	ScrollListViewStyle:{
		flexDirection: 'row',
		height: 50,
		backgroundColor: '#fff'
	}
});

module.exports = Mine;