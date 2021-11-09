import "tailwindcss/tailwind.css"
import "../../public/style.css"
import React from 'react';
import { hot } from 'react-hot-loader';
import GoalsProvider from "./components/context/GoalsProvider";
import { GoalsDashboard } from "./components/pages/GoalsDashboard";

export const App: React.FC = () => {
    return (
        <div>
            <GoalsProvider>
                <GoalsDashboard />
            </GoalsProvider>
        </div>
    );
};

export default hot(module)(App);
