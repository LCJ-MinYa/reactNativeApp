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
	TouchableOpacity,
	ScrollView,
} from 'react-native';

var CommonCell = require('./CommonCell');

var More = React.createClass({
	render(){
		return(
			<View style={styles.container}>
				{/*导航条*/}
				{this.renderNavBar()}

				<ScrollView>
					<View style={styles.cellViewStyle}>
						<CommonCell 
							title='扫一扫'
						/>
					</View>
					<View style={styles.cellViewStyle}>
						<CommonCell 
							title='省流量模式'
							isSwitch= {true}
						/>
						<CommonCell 
							title='消息提醒'
						/>
						<CommonCell 
							title='邀请好友使用'
						/>
						<CommonCell 
							title='清空缓存'
							rightTitle='1.99M'
						/>
					</View>
					<View style={styles.cellViewStyle}>
						<CommonCell 
							title='意见反馈'
						/>
						<CommonCell 
							title='问卷调查'
						/>
						<CommonCell 
							title='支付帮助'
						/>
						<CommonCell 
							title='网络诊断'
						/>
						<CommonCell 
							title='关于美团'
						/>
						<CommonCell 
							title='我要应聘'
						/>
					</View>
					<View style={styles.cellViewStyle,{marginBottom: 15}}>
						<CommonCell 
							title='精品应用'
						/>
					</View>
				</ScrollView>
			</View>
		);
	},
	//导航条
	renderNavBar(){
		return(
			<View style={styles.navBarStyle}>
				<Text style={styles.navBarTitle}>更多</Text>
				<TouchableOpacity onPress={()=>{alert('点击设置')}} style={styles.rightViewStyle}>
					<Image source={{uri:'icon_mine_setting'}} style={styles.navImageStyle} />
				</TouchableOpacity>
			</View>
		)
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
		justifyContent: 'center',
	},
	navBarTitle:{
		color: 'white',
		fontWeight: 'bold',
		fontSize: 16,
		marginTop: Platform.OS === 'ios' ? 20 : 0,
	},
	rightViewStyle:{
		position: 'absolute',
		top: Platform.OS === 'ios' ? 30 : 10,
		right: 15,
	},
	navImageStyle:{
		width: 24,
		height: 24,
	},
	cellViewStyle:{
		marginTop: 15
	}
});

module.exports = More;