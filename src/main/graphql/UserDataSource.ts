import fs from 'fs';
import { app } from 'electron';
import { DataSource } from 'apollo-datasource';

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
}