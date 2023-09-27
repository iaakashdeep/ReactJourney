import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
  "h1",
  { id: "heading", name: "abc" },
  "Script Calling from React Code!" //Shows what we have to put inside this element
);

console.log(heading); //returns object
//const root = ReactDOM.createRoot(document.getElementById("divStart"));

//root.render(heading);

//heading is an object when we print this in the console heading has so many attributes like type etc.  { id: "heading", name: "abc" } we provided in the heading object this shows as the attributes for this object.

//Now when this heading object is passed to the render method, this method will convert this object into browser understandable code and converts into html code to render.

const parent = React.createElement("div", { id: "divInside" }, [
  React.createElement("div", { id: "divChild" }, [
    React.createElement("h1", {}, "I'm a h1 tag test React!"),
    React.createElement("h2", {}, "I'm a h2 tag!"),
  ]),
  React.createElement("div", { id: "divChild2" }, [
    React.createElement("h1", {}, "I'm a h1 tag!"),
    React.createElement("h2", {}, "I'm a h2 tag!"),
  ]),
]);
const root = ReactDOM.createRoot(document.getElementById("divStart")); // createRoot is responsible to create a root in React
root.render(parent);
