import { gql } from 'apollo-server';

const typeDefs = gql`
    input GoalInput {
        name: String,
        createdAt: String,
        progress: [String],
        done: Boolean!,
    }

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

    type Mutation {
        addGoal(goal: GoalInput): [Goal]
    }
`;

export default typeDefs;