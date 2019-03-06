import {createAppContainer, createStackNavigator} from 'react-navigation';
import ExploreContainer from '../containers/ExploreContainer';
import RecordContainer from '../containers/RecordContainer';

const ExploreNavigator = createStackNavigator({
    ExploreContainer: {
        screen: ExploreContainer
    },
    RecordContainer: {
        screen: RecordContainer
    }
});

export default createAppContainer(ExploreNavigator);
