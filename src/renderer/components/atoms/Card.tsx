import React, { ReactElement } from 'react';

type CardProps = {
    children: ReactElement
}

export const Card: React.FC<CardProps> = ({ children }) => {
    return (
        <div className="p-5 rounded overflow-hidden shadow-sm w-full bg-purple-400">
            {children}
        </div>
    )
}

export default Card;