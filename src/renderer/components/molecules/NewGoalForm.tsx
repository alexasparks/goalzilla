import React from "react";
import Button from '../atoms/Button';
import Input from '../atoms/Input';

const NewGoalForm: React.FC = () => {
    return (
        <div className="flex flex-grow-1 items-end justify-between">
            <Input
                name="new-goal"
                labelText="Add Goal"
                placeholderText="Work on Short Answer"
            />
            <Button />
        </div>
    )
}

export default NewGoalForm;
