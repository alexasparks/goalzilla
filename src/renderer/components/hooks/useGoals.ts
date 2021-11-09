import { useContext } from 'react';
import { DispatchGoals, GoalsContext } from '../context/GoalsProvider';

export const useGoals = () => {
	return {
		existingGoals: useContext(GoalsContext),
		updateGoals: useContext(DispatchGoals),
	};
}