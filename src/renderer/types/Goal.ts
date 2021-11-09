export type Goal = {
    id: string;
    name?: string;
    createdAt: string;
    progress?: string[];
    done: boolean;
}

export type Action = {
    goal: Goal;
    type: 'add' | 'change' | 'delete' ;
}
