import { UserDataService } from "./UserDataService";

export type Goal = {
    id: string;
    name?: string;
    createdAt: string;
    progress?: string[];
    done: boolean;
}

export class GoalService extends UserDataService {
    getExistingGoals() {
        try {
            const existingGoals = this.get('goals.json');

            const goalsArr = [];

            for (const [_, goal] of Object.entries(existingGoals)) {
                goalsArr.push(goal);
            }

            return goalsArr;
        } catch (error) {
            console.log('Error getting goals: ', error);
        }
    }

    addGoal(goal: Goal) {
        try {
            this.add('goals.json', goal);
        } catch (error) {
            console.log(`Error adding goal: `, error);
        }
    }
}
