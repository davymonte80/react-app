import React, { Fragment } from "react";
import ListGroup from "./components/ListGroup";

const items = ["Nairobi", "Nakuru", "Nanyuki", "Kisii", "Kisumu"];

// Declare the function named myFunction
function myFunction() {
  alert("Hello World!");
}

// Define the functional component App
const App = () => {
  return (
    <Fragment>
      <ul className="list-group">
        {items.map((item) => (
          <li key={item} className="list-group-item">
            {item}
          </li>
        ))}
      </ul>
    </Fragment>
  );
};

export default App;
