import { ApolloServer } from 'apollo-server';
import resolvers from './resolvers';
import typeDefs from './schema';
import { GoalService } from './dataSources/GoalService';

const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => ({
        goalService: new GoalService(),
    })
});

export default server;