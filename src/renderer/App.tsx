import "tailwindcss/tailwind.css"
import "../../public/style.css"
import React from 'react';
import { hot } from 'react-hot-loader';
import GoalsProvider from "./components/context/GoalsProvider";
import { GoalsDashboard } from "./components/pages/GoalsDashboard";

export const App: React.FC = () => {
    return (
        <GoalsProvider>
            <GoalsDashboard />
        </GoalsProvider>
    );
};

export default hot(module)(App);
