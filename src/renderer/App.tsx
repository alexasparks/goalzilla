import "tailwindcss/tailwind.css"
import "../../public/style.css"
import React from 'react';
import { hot } from 'react-hot-loader';
import GoalsProvider from "./components/context/GoalsProvider";
import { GoalsDashboard } from "./components/pages/GoalsDashboard";
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
    uri: 'http://localhost:5000/',
    cache: new InMemoryCache(),
})

export const App: React.FC = () => {
    return (
        <ApolloProvider client={client}>
            <GoalsProvider>
                <GoalsDashboard />
            </GoalsProvider>
        </ApolloProvider>
    );
};

export default hot(module)(App);
