import "tailwindcss/tailwind.css"
import "../../public/style.css"
import React from 'react';
import Button from "./components/atoms/Button";
import { hot } from 'react-hot-loader';

export const App: React.FC = () => (
    <>
        <div>Hello World from App!</div>
        <Button clickHandler={() => console.log('clicked')} name="button" buttonText="click there" />
    </>
);

export default hot(module)(App);
