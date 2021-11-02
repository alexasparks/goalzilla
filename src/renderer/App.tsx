import "tailwindcss/tailwind.css"
import "../../public/style.css"
import React from 'react';
import { hot } from 'react-hot-loader';
import NewGoalForm from "./components/molecules/NewGoalForm";
import ExistingGoalsList from "./components/templates/ExistingGoalsList";

export const App: React.FC = () => {
    return (
        <div className="px-8 py-10">
            <NewGoalForm />
            <ExistingGoalsList existingGoals={[{
                name: 'Code for 100 days',
                createdAt: Date.now(),
                modifiedAt: Date.now(),
            }, {
                name: 'Work on Short Answer',
                createdAt: Date.now(),
                modifiedAt: Date.now(),
            },{
                name: 'Finish React Book',
                createdAt: Date.now(),
                modifiedAt: Date.now(),
            }, {
                name: 'Yoga',
                createdAt: Date.now(),
                modifiedAt: Date.now(),
            }]} />
        </div>
    );
};

export default hot(module)(App);
