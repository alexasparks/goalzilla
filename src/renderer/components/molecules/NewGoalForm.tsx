import React, { useState } from "react";
import Button from '../atoms/Button';
import Input from '../atoms/Input';
import { Action } from '../../types/Goal';

type NewGoalFormProps = {
    updateGoals: React.Dispatch<Action>;
}

const NewGoalForm: React.FC<NewGoalFormProps> = ({ updateGoals }) => {
    const [ name, updateName ] = useState('');

    const addGoal = (e: React.MouseEvent) => {
        e.preventDefault();

        if (name === '') {
            return;
        }

        updateGoals({
            type: 'add',
            goal: {
                name,
                id: Date.now().toString(),
                createdAt: new Date(),
                done: false,
            },
        });

        updateName('');
    }

    return (
        <form className="flex flex-grow-1 items-end justify-between">
            <Input
                name="new-goal"
                labelText="Add Goal"
                placeholderText="Work on Short Answer"
                changeHandler={(e) => updateName(e.target.value)}
                value={name}
            />
            <Button type="submit" name="add-new-goal" clickHandler={addGoal} buttonText="+" />
        </form>
    )
}

export default NewGoalForm;
