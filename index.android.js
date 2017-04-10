/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {
    Component
} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Navigator,
} from 'react-native';

/*-- 导入外部组件类 --*/
var Launchimage = require('./Components/Main/Launchimage');

export default class reactNativeApp extends Component {
    render() {
        return (
            <Navigator
                initialRoute={{ name: '启动页', component: Launchimage }}
                configureScene={(route) => {
                    return Navigator.SceneConfigs.FloatFromRight;
                }}
                renderScene={(route, navigator) => {
                    let Component = route.component;
                    return <Component {...route.params} navigator={navigator} />
                }}
            />
        );
    }
}

AppRegistry.registerComponent('reactNativeApp', () => reactNativeApp);