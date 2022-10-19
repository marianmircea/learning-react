import React from 'react';
import ReactDOM from 'react-dom/client';
import Car from './Car';


function Garage () {
    return (
        <>
            <h1>Who lives in my garage?</h1>
            <Car brand="Ford"/>
        </>
    );
}

ReactDOM.createRoot(document.getElementById('root')).render(<Garage />);