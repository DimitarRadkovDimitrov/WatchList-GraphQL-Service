import {createBottomTabNavigator, createAppContainer} from 'react-navigation';
import ApolloClient from 'apollo-boost';
import ExploreScreen from './src/ExploreScreen';
import ProfileScreen from './src/ProfileScreen';

export const client = new ApolloClient({
  uri: 'http://10.0.2.2:3000/graphql'
});

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
