import { UserDataService } from "./UserDataService";

export type Goal = {
    id: string;
    name?: string;
    createdAt: string;
    progress?: string[];
    done: boolean;
}

export class GoalService extends UserDataService {
    addGoal(goal: Goal) {
        try {
            this.add('goals.json', goal);
        } catch (error) {
            console.log(`Error adding goal: `, error);
        }
    }
}
