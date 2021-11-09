import React from 'react';

type ButtonProps = {
    buttonText: string
    disabled?: boolean
    type?: 'button' | 'submit'
    name: string
    clickHandler: (e: React.MouseEvent) => void
}

export const Button: React.FC<ButtonProps> = ({ buttonText, type = 'button', disabled, name, clickHandler }) => {
    return (
        <button
            className="rounded-full bg-purple-200 hover:bg-purple-400 h-14 w-14 flex items-center justify-center ml-3"
            type={type}
            onClick={clickHandler}
            disabled={disabled}
            name={name}
        >
            {buttonText}
        </button>
    )
}

export default Button;
