import fs from 'fs';
import { app } from 'electron';
import { DataSource } from 'apollo-datasource';

export type Goal = {
    id: string;
    name?: string;
    createdAt: string;
    progress?: string[];
    done: boolean;
}
export class UserDataSource extends DataSource {
    public userDataDir: string;

    constructor() {
        super();

        this.userDataDir = app.getPath('userData');
    }

    getExistingGoals() {
        const goalsJson = fs.readFileSync(`${this.userDataDir}/goals.json`);
        return JSON.parse(goalsJson?.toString() ?? '');
    }

    addGoal(goal: Goal) {
        const goalsJson = fs.readFileSync(`${this.userDataDir}/goals.json`);
        const existingGoals: Goal[] = JSON.parse(goalsJson?.toString() ?? '');

        fs.writeFileSync(`${this.userDataDir}/goals.json`, JSON.stringify({...existingGoals, goal }))
    }

    deleteGoal(goal: Goal) {
        const goalsJson = fs.readFileSync(`${this.userDataDir}/goals.json`);
        const existingGoals: Goal[] = JSON.parse(goalsJson?.toString() ?? '');

        return existingGoals?.filter(existingGoal => existingGoal.id !== goal.id)
    }

    updateGoal(goal: Goal) {
        const goalsJson = fs.readFileSync(`${this.userDataDir}/goals.json`);
        const existingGoals: Goal[] = JSON.parse(goalsJson?.toString() ?? '');

        return existingGoals?.map(existingGoal => {
            if(existingGoal.id === goal.id) {
                return existingGoal;
            }
        });
    }
}