/** @format */
import {AppRegistry,YellowBox} from 'react-native';
import App from './src/index';
import {name as appName} from './app.json';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated',
 'Module RCTImageLoader','Debugger and device','Warning: Each child in an array',
 'Remote debugger','Warning: Cannot update','Setting a timer for','`rotation` sup']);
AppRegistry.registerComponent(appName, () => App);
