import React, { createContext, useReducer } from 'react';
import { Goal, Action } from '../../types/Goal';

export const GoalsContext = createContext(null);
export const DispatchGoals = createContext(null);

function goalsReducer(existingGoals: Goal[], action: Action) {
	console.log('existingGoals: ', existingGoals);
	switch (action.type) {
		case 'add': {
			return [...existingGoals, {
				id: action.goal.id,
				name: action.goal.name,
                createdAt: action.goal.createdAt,
                progress: action.goal.progress,
				done: action.goal.done,
			}];
		}

		case 'change': {
			return existingGoals.map(goal => {
				if (goal.id === action.goal.id) {
					return action.goal;
				}

                return goal;
			});
		}

        case 'delete': {
			return existingGoals.filter(goal => goal.id !== action.goal.id);
		}

		default: {
			throw Error('Unknown action: ' + action.type);
		}
	}
}

export const GoalsProvider = ({ children }: { children: React.ReactElement }) => {
	const [goals, dispatch] = useReducer(goalsReducer, []);

	return (
        <GoalsContext.Provider value={goals}>
			<DispatchGoals.Provider value={dispatch}>
				{children}
			</DispatchGoals.Provider>
		</GoalsContext.Provider>
    );
}

export default GoalsProvider;