import React from 'react';
import {createBottomTabNavigator, createAppContainer} from 'react-navigation';
import ExploreScreen from './src/ExploreScreen';
import ProfileScreen from './src/ProfileScreen';

const TabNavigator = createBottomTabNavigator({
  Explore: ExploreScreen,
  Profile: ProfileScreen,
});

export default createAppContainer(TabNavigator);
