export default {
    Query: {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        existingGoals(parent, args, { dataSources }) {
            return dataSources.userData.getExistingGoals();
        },
    },
    Mutation: {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        addGoal(parent, { goal }, { dataSources }) {
            return dataSources.goalService.addGoal(goal);
        }
    }
}