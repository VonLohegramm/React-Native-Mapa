import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Home from './src/index';


const navigator = createStackNavigator(
  {
    Home: Home
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      headerShown: false
    }
  }
);

export default createAppContainer(navigator);
