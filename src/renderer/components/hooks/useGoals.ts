import { useContext } from 'react';
import { DispatchGoals, GoalsContext } from '../context/GoalsProvider';
import { useQuery, gql } from '@apollo/client';

export const useGoals = () => {
	const GET_GOALS = gql`
		query getGoals {
			existingGoals {
				id
				name
				createdAt
				progress
				done
			}
		}
	`

	return {
		existingGoals: useQuery(GET_GOALS),
		updateGoals: useContext(DispatchGoals),
	};
}