import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import './App.css';

function FavoriteColor() {
    const [color, setColor] = useState("red");
    var [default_style, setDefaultStyle] = useState("title");

    return (
        <>
            <h1 className={default_style}>My favorite color is {color}!</h1>
            <button
                type="button"
                onClick={() => {
                    setColor("blue");
                    setDefaultStyle("blue")
                }}
            >Blue</button>
            <button
                type="button"
                onClick={() => {
                    setColor("red");
                    setDefaultStyle("red")
                }}
            >Red</button>
            <button
                type="button"
                onClick={() => {
                    setColor("pink");
                    setDefaultStyle("pink")
                }}
            >Pink</button>
            <button
                type="button"
                onClick={() => {
                    setColor("green");
                    setDefaultStyle("green")
                }}
            >Green</button>
            <button type="button" onClick={() => setDefaultStyle("black")}>Default</button>
        </>
    );
}

function Timer () {
    const [count, setCount] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            setCount((count) => count + 1);
        }, 1000);
    }, []);

    return <h1>Rendered {count} times!</h1>
}

function Counter () {
    const [count, setCount] = useState(0);
    const [calculation, setCalculation] = useState(0);

    useEffect(() => {
        setCalculation(() => count*2);
    }, [count]);

    return (<>
        <p>Count: {count}</p>
        <p>Calculation: {calculation}</p>
        <button onClick={() => setCount((c) => c + 1)}>+</button>
    </>);
}

function Timer2 () {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let timer = setTimeout(() => {
            setCount((count) => count + 1);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    return <h1>Rendered {count} times!</h1>
}

function ExampleWithCountButton() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        // Update the document title using the browser API
        document.title = `You clicked ${count} times`;
        //document.title = 'You clicked ' + count + ' times'; // working
    });

    var hello_message = function() {
        return "Hello Everybody!";
    }
    var hello_message_new = () => {
        return "Tot Hello Everybody!";
    }
    var hello_msg = () => 'Hello Evrbdy!';

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
            <p>
                {hello_msg()}
            </p>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ExampleWithCountButton />);