import React, { Fragment } from "react";
import { Profile } from "next-auth";
const App = () => {
  let items = ["Nairobi", "Nakuru", "Nanyuki", "Kisii", "Kisumu"];
  // items = []; // Uncomment this line to test with an empty array

  const handleItemClick = (item) => {
    console.log(`Clicked on ${item}`);
  };

  if (items.length > 0) {
    return (
      <Fragment>
        <h1>List</h1>
        <ul>
          {items.map((item, index) => (
            <li key={index} onClick={() => handleItemClick(item)}>
              {item}
            </li>
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
export default App;
