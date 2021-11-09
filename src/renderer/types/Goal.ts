export type Goal = {
    id: string;
    name?: string;
    createdAt: Date;
    progress?: Date[];
    done: boolean;
}

export type Action = {
    goal: Goal;
    type: 'add' | 'change' | 'delete' ;
}
