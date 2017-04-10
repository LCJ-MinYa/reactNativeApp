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
} from 'react-native';

/*-- 导入外部组件类 --*/
var Main = require('./Main');

var Launchimage = React.createClass({
    render(){
        return(
            <Image source={{uri:'launchimage'}} style={styles.container} />
        );
    },

    //定时器
    componentDidMount(){
        setTimeout(()=>{
            this.props.navigator.replace({
                component: Main,
            })
        }, 2000);
    }
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

module.exports = Launchimage;