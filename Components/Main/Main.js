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
	Navigator,
} from 'react-native';

/*-- 导入外部组件类 --*/
import TabNavigator from 'react-native-tab-navigator';
var Home = require('../Home/Home');
var Shop = require('../Shop/Shop');
var Mine = require('../Mine/Mine');
var More = require('../More/More');

var Main = React.createClass({
	//初始化函数（变量可以改变）
	getInitialState() {
		return {
			selectedTab: "Home" //默认是首页
		}
	},

	render() {
		return (
			<TabNavigator>

				{/*--首页--*/}
				{this.renderTabItem('首页', 'icon_tabbar_homepage', 'icon_tabbar_homepage_selected', 'Home', '首页', Home)}

				{/*--商家--*/}
				{this.renderTabItem('商家', 'icon_tabbar_merchant_normal', 'icon_tabbar_merchant_selected', 'Shop', '商家', Shop)}

				{/*--我的--*/}
				{this.renderTabItem('我的', 'icon_tabbar_mine', 'icon_tabbar_mine_selected', 'Mine', '我的', Mine)}

				{/*--更多--*/}
				{this.renderTabItem('更多', 'icon_tabbar_misc', 'icon_tabbar_misc_selected', 'More', '更多', More)}

			</TabNavigator>
		);
	},

	//抽离相同的TabNavigator.Item
	renderTabItem(title, iconName, selectedIconName, selectedTab, componentName, component) {
		return ( 
			<TabNavigator.Item
				title={title}
				renderIcon={() => <Image source={{uri: iconName}} style={styles.iconStyle}/>}
				renderSelectedIcon={() => <Image source={{uri: selectedIconName}} style={styles.iconStyle}/>}
				onPress={() => {this.setState({selectedTab: selectedTab})}}
				selected={this.state.selectedTab === selectedTab}
				selectedTitleStyle={styles.selectedTitleStyle}
			>
				<Navigator
          			initialRoute={{ name: componentName, component: component }}
          			configureScene={(route) => {
            			return Navigator.SceneConfigs.FloatFromRight;
          			}}
          			renderScene={(route, navigator) => {
            			let Component = route.component;
            			return <Component {...route.params} navigator={navigator} />
          			}}
          		/>
			</TabNavigator.Item>
		)
	}
});

const styles = StyleSheet.create({
	iconStyle: {
		width: Platform.OS === 'ios' ? 30 : 25,
		height: Platform.OS === 'ios' ? 30 : 25,
	},
	selectedTitleStyle: {
		color: '#ff5e11'
	}
});

module.exports = Main;