import React, { Fragment } from "react";
import ListGroup from "./components/ListGroup";

let items = ["Nairobi", "Nakuru", "Nanyuki", "Kisii", "Kisumu"];
items = [];
if (items.length > 0) {
  return (
    <Fragment>
      <h1>List</h1>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </Fragment>
  );
} else {
  // If no items found
  return (
    <Fragment>
      <h1>List</h1>
      <p>No Item found</p>
    </Fragment>
  );
}
};
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
