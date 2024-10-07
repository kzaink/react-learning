import React from "react";
import ReactDOM from "react-dom/client";

let parent = React.createElement("div", { id: "parent" }, [
  React.createElement("h1", {}, "Hello World"),
  React.createElement("p", {}, "This is a paragraph"),
  React.createElement("button", {}, "Click Me"),
]);

let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

let heading = <h1 id="heading"> Hello World ! </h1>;
root.render(heading);

// Updating a functional component

let Title = () => <h1>functional component</h1>;
let title = (
  <div className="hello">
    <h3>hello</h3>
  </div>
);

let Greeting = () => (
  <div id="container">
    <Title />
    {title}
    {Title()}
    <h1 className="greet"> in React.Js!</h1>
  </div>
);

root.render(<Greeting />);
