import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.render(<App />, document.getElementById("root"));

const citrus = ["lime", "lemon", "orange"];

const fruit = ["banana", ...citrus, "apple", "kiwi", ...citrus];

console.log(fruit);

const fullName = {
  fName: "James",
  lName: "Bond"
};

const user = {
  ...fullName,
  id: 1,
  username: "scoobidoo"
};

console.log(user);
