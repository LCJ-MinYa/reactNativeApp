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
	View
} from 'react-native';

var Shop = React.createClass({
	render(){
		return(
			<View style={styles.container}>
				<Text>商店</Text>
			</View>
		);
	}
});

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#e8e8e8',
	},
});

module.exports = Shop;