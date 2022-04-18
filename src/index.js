import React from 'react';
import ReactDOM from 'react-dom';

const root = document.getElementById("root");
const span = React.createElement("span", {
    key: "wanna-go-home-span"
}, "I wanna go home");
const btn = React.createElement("button", {
    key: "btn",
    onClick: () => {
        console.log('I am clicked')
    }
}, "Click me");
const contaniner = React.createElement("div", null, [span, btn]);

ReactDOM.render(contaniner, root);