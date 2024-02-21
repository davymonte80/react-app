import React, { Fragment } from "react";
import ListGroup from "./components/ListGroup";

let items = ["Nairobi", "Nakuru", "Nanyuki", "Kisii", "Kisumu"];
items = [];

const App = () => {
    {
    return (
      <Fragment>
        <h1>List</h1>
        <p>No Item found</p>
      </Fragment>
    );
  }

  return (
    <Fragment>
      <h1>List</h1>
      <ul className="list-group">
        {items.map((item) => (
          <li
            className="list-group-item"
            key={item}
            onClick={() => console.log("Clicked")}
          >
            {item}
          </li>
        ))}
      </ul>
    </Fragment>
  );
};

export default App;
