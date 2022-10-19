import React from 'react';
import ReactDOM from 'react-dom/client';
import Car from './Car';


function Garage () {
  return (
    <h2>Hello, this is {params.color} car!</h2>
  );
}


/*
class Model {
  constructor (name, mod){
    super(name); // refers to the parent class
    this.model = mod;
  }

  brandAndModelName(){
    return this.present() + ' It is a ' + this.model + '.';
  }
}
*/
//const my_car = new Model('Ford', 'Mustang');
//const title_2 = <h1>{my_car.brandAndModelName()}</h1>;

//const root = ReactDOM.createRoot(document.getElementById('root'));
//root.render(title_2);

const myArray = ['apple', 'banana', 'orange'];

const myList = myArray.map((item) => <p>{item}</p>)

//ReactDOM.render(myList, document.getElementById('root'));
//const root = ReactDOM.createRoot(document.getElementById('root'));
//root.render(myList);

ReactDOM.createRoot(document.getElementById('root')).render(<Car color='white' />);