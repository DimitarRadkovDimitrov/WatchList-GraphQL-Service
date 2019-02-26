import {createBottomTabNavigator, createAppContainer} from 'react-navigation';
import ExploreScreen from './src/ExploreScreen';
import ProfileScreen from './src/ProfileScreen';

const TabNavigator = createBottomTabNavigator(
  {
      Explore: ExploreScreen,
      Profile: ProfileScreen,
  },
  {
    tabBarOptions: 
    {
        activeTintColor: 'tomato',   
        inactiveTintColor: 'black',
    },
  },
);

export default createAppContainer(TabNavigator);
