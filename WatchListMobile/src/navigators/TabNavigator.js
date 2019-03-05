import {createBottomTabNavigator, createAppContainer} from 'react-navigation';
import ExploreNavigator from '../navigators/ExploreNavigator';
import ProfileContainer from '../containers/ProfileContainer';

const TabNavigator = createBottomTabNavigator(
    {
        Explore: ExploreNavigator,
        Profile: 
        {
            screen: ProfileContainer
        }
    },
    {
        order: ['Explore', 'Profile'],
        tabBarOptions: 
        {
            activeTintColor: 'tomato',   
            inactiveTintColor: 'black',
        },
    },
);

const TabbedAppContainer = createAppContainer(TabNavigator);
export default TabbedAppContainer;
