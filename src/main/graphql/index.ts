import { ApolloServer } from 'apollo-server';
import resolvers from './resolvers';
import typeDefs from './schema';
import { UserDataSource } from './UserDataSource';

const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => ({
        userData: new UserDataSource(),
    })
});

export default server;