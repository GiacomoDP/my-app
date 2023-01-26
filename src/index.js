import React from "react";
import ReactDOM from "react-dom/client";

function Greeting() {
  return (
    <React.Fragment>
      <div>
        <h3>My First Component!!</h3>
      </div>
    </React.Fragment>
  );
}
/*function Greeting() {
  return React.createElement("h2", {}, "hello world");
}*/

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Greeting />);
