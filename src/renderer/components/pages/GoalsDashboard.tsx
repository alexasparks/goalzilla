import React from 'react';
import NewGoalForm from '../molecules/NewGoalForm';
import ExistingGoalsList from '../templates/ExistingGoalsList';
import { useGoals } from "../hooks/useGoals";

export const GoalsDashboard: React.FC = () => {
    const { existingGoals, updateGoals } = useGoals();

    const { loading, error, data } = existingGoals;

    if (loading) {
        return <div>Loading</div>;
    }

    if (error) {
        console.log('Error with existingGoals: ', error);
    }

    return (
        <div className="px-8 py-10">
            <NewGoalForm updateGoals={updateGoals} />
            <ExistingGoalsList existingGoals={data.existingGoals} />
        </div>
    )
}