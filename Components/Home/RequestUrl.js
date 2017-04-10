'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
  ListView,
  Image
} from 'react-native';

var BottomCommonCell = require('./BottomCommonCell');

var RequestUrl = React.createClass({
	getDefaultProps: function() {
		return {
			api_url: 'http://chat.lichaojun.com/api/getRoomList'
		};
	},
	getInitialState: function() {
		//创建数据源
		var ds = new ListView.DataSource({
			rowHasChanged: (row1, row2) => row1 !== row2
		});
		//初始化数据源
		return{
			dataSource: ds
		}
	},
  	render() {
    	return (
      		<View style={styles.container}>
      			<BottomCommonCell
      				leftIcon='cnxh'
      				leftTitle='测试网络请求'
      			/>
      			<ListView
				  dataSource={this.state.dataSource}
				  renderRow={this.renderRow}
				/>
      									
      		</View>
    	);
  	},
  	renderRow(rowData){
  		return(
  			<View>
  				<Text>{rowData.roomName}</Text>
  				<Text>{rowData.roomDetail}</Text>
  			</View>
  		)
  	},
  	componentDidMount(){
  		//从网络上请求数据
  		this.loadDataFormNet();
  	},
  	loadDataFormNet(){
  		var myInit = {
  			method: 'POST',
  		}
  		fetch(this.props.api_url, myInit)
  		.then((response) => response.json())
  		.then((resultData) => {
  			console.log(resultData);
  			//更新数据源
  			this.setState({
  				dataSource: this.state.dataSource.cloneWithRows(resultData.data)
  			})
  		})
  		.catch((error)=>{
  			console.log(error);
  		})
  	}
})

const styles = StyleSheet.create({
	container:{
		marginTop: 15
	}
});


module.exports = RequestUrl;