import React from 'react';
import Card from '../atoms/Card';

export type ExistingGoal = { name: string, createdAt: number, modifiedAt: number }

export const ExistingGoalCard: React.FC<{ goal: ExistingGoal }> = ({ goal }) => {
    return (
        <button className="w-full" onClick={() => console.log(goal.name + ' clicked')}>
            <Card>
                <div className="bg-purple-100">
                    <div>
                        {goal.name}
                    </div>
                    <div>
                        {new Date(goal.createdAt).toString()}
                    </div>
                </div>
            </Card>
        </button>
    )
}