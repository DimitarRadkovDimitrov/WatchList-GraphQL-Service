import {createAppContainer, createStackNavigator} from 'react-navigation';
import ExploreContainer from '../containers/ExploreContainer';
import RecordDetails from '../components/RecordDetails';

const ExploreNavigator = createStackNavigator({
    ExploreContainer: {
        screen: ExploreContainer
    },
    RecordDetails: {
        screen: RecordDetails
    }
});

export default createAppContainer(ExploreNavigator);
