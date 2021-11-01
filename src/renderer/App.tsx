import "tailwindcss/tailwind.css"
import React from 'react';
import Test from './components/Test';

export const App: React.FC = () => (
    <>
        <div className="bg-black">Hello World from App!</div>
        <Test />
    </>
);

export default App;
