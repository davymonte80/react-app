import { Fragment } from "react";
import ListGroup from "./components/ListGroup";
const items =[ 
  'Nairobi',
  'Nakuru',
  'Nanyuki',
  'Kisii',
  'Kisumu',
]

// Declare the function named myFunction
function myFunction() {
  alert("Hello World!");
}

{items.map(item =><li> {item}</li>)}
  return (
    <Fragment>
      <ul className="list-group">
        <li className="list-group-item">An item</li>
        <li className="list-group-item">A second item</li>
        <li className="list-group-item">A third item</li>
        <li className="list-group-item">A fourth item</li>
        <li className="list-group-item">And a fifth one</li>
      </ul>
    </Fragment>
  );
}
export default App;
