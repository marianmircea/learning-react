import React, { useState } from "react";
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

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<FavoriteColor />);