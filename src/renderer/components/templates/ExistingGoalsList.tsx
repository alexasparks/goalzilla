import React from 'react';
import { ExistingGoalCard } from '../molecules/ExistingGoalCard';
import { ExistingGoal } from '../molecules/ExistingGoalCard';

type ExistingGoalsListProps = {
    existingGoals: Array<ExistingGoal>
}

export const ExistingGoalsList: React.FC<ExistingGoalsListProps> = ({ existingGoals }) => {
    return (
        <div>
            <ul className="mt-3 flex w-full justify-start flex-wrap">
                {existingGoals.map(goal => (
                    <li className="mt-5 mr-5 w-60 h-3/6" key={goal.name}>
                        <ExistingGoalCard goal={goal} />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ExistingGoalsList;