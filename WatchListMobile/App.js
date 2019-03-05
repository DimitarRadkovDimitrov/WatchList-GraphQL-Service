import React from "react";
import {ApolloProvider} from 'react-apollo';
import ApolloClient from 'apollo-boost';
import TabbedAppContainer from './src/navigators/TabNavigator';

const apolloClient = new ApolloClient({
    uri: 'http://10.0.2.2:3000/graphql'
});

export default class App extends React.Component
{
    render()
    {
        return(
            <ApolloProvider client={apolloClient}>  
                <TabbedAppContainer/>
            </ApolloProvider>
        );
    }
}
