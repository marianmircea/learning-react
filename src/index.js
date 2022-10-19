import React from 'react';
import ReactDOM from 'react-dom/client';
import Car from './Car';

function Garage () {
    const cars = [
        {id: 1, brand: 'Ford'},
        {id: 2, brand: 'BMW'},
        {id: 3, brand: 'Audi'}
    ];

    return (
        <>
            <h1>Who liveeees in my garage?</h1>
            <ul>
                {//cars.map((car) => <Car key={car.id} brand={car.brand} />)
                }
            </ul>
        </>
    );
}

//ReactDOM.createRoot(document.getElementById('root')).render(<Garage />);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Car brand='ceva' />);