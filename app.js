import React from "react";
import ReactDOM from "react-dom/client";

let parent = React.createElement("div", { id: "parent" }, [
  React.createElement("h1", {}, "Hello World"),
  React.createElement("p", {}, "This is a paragraph"),
  React.createElement("button", {}, "Click Me"),
]);

let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
