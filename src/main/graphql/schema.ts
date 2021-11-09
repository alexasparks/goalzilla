import { gql } from 'apollo-server';

const typeDefs = gql`
    type Goal {
        id: ID!,
        name: String,
        createdAt: String,
        progress: [String],
        done: Boolean!,
    }

    type Query {
        existingGoals: [Goal],
    }
`;

export default typeDefs;