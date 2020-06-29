/**
 * @format
 */

import {AppRegistry} from 'react-native';
import rooter from './src/rooter';
import {name as appName} from './app.json';
import 'react-native-gesture-handler';

AppRegistry.registerComponent(appName, () => rooter);
