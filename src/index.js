import React from "react";
import ReactDOM from "react-dom";

const luckyNumber = Math.floor(Math.random() * 10);
const fName = "Matt";
const lName = "Adamson";

ReactDOM.render(
  <div>
    <h1>
      {fName} {lName}'s List and lucky number
    </h1>
    <p>My lucky number is {luckyNumber}.</p>
    <ul>
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
    </ul>
  </div>,
  document.getElementById("root")
);
