import React from "react";
import ReactDOM from "react-dom";
const fname = "Jyotiranjan";
const lname = "Muduli";
//const fullname = fname + " " + lname;
//const luckyNumber = 1;
ReactDOM.render(
  <div>
    <h1>Hello {fname + " " + lname}!</h1>
    <p>Your Lucky number is {Math.floor(Math.random() * 10)}</p>
  </div>,
  document.getElementById("root")
);
