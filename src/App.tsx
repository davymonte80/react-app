import React, { Fragment } from "react";
import ListGroup from "./components/ListGroup";

let items = ["Nairobi", "Nakuru", "Nanyuki", "Kisii", "Kisumu"];
items = [];

const App = () => {
  if (items.length === 0) {
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
          <li key={item} className="list-group-item">
            {item}
          </li>
        ))}
      </ul>
    </Fragment>
  );
};

export default App;
