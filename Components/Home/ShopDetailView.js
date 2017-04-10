'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
  Platform,
  TouchableOpacity,
  Image,
  WebView
} from 'react-native';

var ShopDetailView = React.createClass({
  	render() {
    	return (
      		<View style={styles.container}>
      			{/*--导航--*/}
                {this.renderNavBar()}

                <WebView
                    automaticallyAdjustContentInsets={true}
                    source={{uri: this.props.url}}
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                    decelerationRate="normal"
                    startInLoadingState={true}
                />
      		</View>
    	);
  	},
    //导航条
    renderNavBar(){
        return(
            <View style={styles.navBarStyle}>
                <TouchableOpacity style={styles.leftViewStyle} onPress={()=>{this.props.navigator.pop()}}>
                    <Image
                      style={styles.leftNavImageStyle}
                      source={{uri: 'navigationbar_arrow_up'}}
                    />
                    
                </TouchableOpacity>
                <Text style={styles.navBarTitle}>{this.props.name}</Text>
                <TouchableOpacity onPress={()=>{alert('点击设置')}} style={styles.rightViewStyle}>
                    <Image source={{uri:'icon_mine_setting'}} style={styles.navImageStyle} />
                </TouchableOpacity>
            </View>
        )
    }
})

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
    leftViewStyle:{
        position: 'absolute',
        top: Platform.OS === 'ios' ? 30 : 10,
        left: 10,
        width: 24,
        height: 24,
        alignItems: 'center',
        justifyContent: 'center',
    },
    leftNavImageStyle:{
        width: 7,
        height: 13
    }
});


module.exports = ShopDetailView;