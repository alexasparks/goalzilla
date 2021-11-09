import { ApolloServer } from 'apollo-server';
import resolvers from './resolvers';
import typeDefs from './schema';
import { UserData } from './UserDataSource';

const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => ({
        userData: new UserData(),
    })
});

export default server;