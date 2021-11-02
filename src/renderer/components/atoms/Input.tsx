import React from 'react';

type InputProps = {
    placeholderText: string
    labelText: string
    disabled?: boolean
    type?: 'text' | 'number'
    name: string
    changeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const Input: React.FC<InputProps> = ({ placeholderText, labelText, disabled, name, changeHandler, type = 'text' }) => {
    return (
        <span className="flex flex-col flex-1">
            <label className="text-gray-500 text-sm" htmlFor={name}>{labelText}</label>
            <input
                className="px-3.5 py-3.5 placeholder-gray-300 relative rounded border border-gray-300 w-full"
                name={name}
                disabled={disabled}
                type={type}
                placeholder={placeholderText}
                onChange={(e) => changeHandler(e)}
            />
        </span>
    )
}

export default Input;
