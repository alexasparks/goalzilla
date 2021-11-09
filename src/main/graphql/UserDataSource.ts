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
export class UserData extends DataSource {
    public userDataDir: string;

    constructor() {
        super();

        this.userDataDir = app.getPath('userData');
    }

     /** Returns the parsed JSON data */
    get(fileName: string) {
        const filePath = `${this.userDataDir}/${fileName}`
        if (!fs.existsSync(filePath)) {
            return null;
        }

        const file = fs.readFileSync(filePath, 'utf-8');

        try {
            if (file) {
                return JSON.parse(file.toString());
            }
        } catch (error) {
            console.log(`error parsing JSON for ${fileName}: `, error);
        }

        return null;
    }

    /** Writes to a file if it exists */
    write(fileName: string, jsonData: string) {
        const filePath = `${this.userDataDir}/${fileName}`;

        try {
            fs.writeFileSync(filePath, jsonData);
        } catch (error) {
            console.error(`Could not write ${fileName}: `, error);
        }
    }

    add(fileName: string, data: any) {
        const existing = this.get(fileName);

        if (existing) {
            this.write(
                fileName,
                JSON.stringify({ ...existing, ...data }),
            );
        }
    }

    delete(fileName: string, id: string) {
        const existing = this.get(fileName);


        if (existing) {
            delete existing[id];

            this.write(
                fileName,
                JSON.stringify(existing),
            )
        }
    }

    update(fileName: string, data: any) {
        const existing = this.get(fileName);

        if (existing) {
            existing[data?.id] = data;

            this.write(
                fileName,
                JSON.stringify(existing),
            )
        }
    }
}