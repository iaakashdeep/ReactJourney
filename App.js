import React from "react";
import ReactDOM from "react-dom/client";

//react element
const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Welcome to react World!"
);

//This heading is not html element this is a react Element (JS object) created by react

const root = ReactDOM.createRoot(document.getElementById("divStart"));

root.render(heading);

//root is treated as the body of the DOM everything we render, we have to render inside root
//ReactDOM will take the object in this case heading and then it will parse it to HTML content
//whatever we render inside root here will overwrite the body content in html page

//In summary: React.createElement => React Element which is JS object => HTML element and then it renders

const jsxVariable = <h1 id="jsxHeading">Welcome to react world using jsx!!</h1>;

//In summary: jsx => React.createElement => React Element which is JS object => HTML element and then it renders
//And this jsx will be transpiled to react.createElement by Babel (open source JS compiler)

//<h1 id="jsxHeading">Welcome to react world using jsx!!</h1>; this is not HTMl it is like a html syntax but not HTMl

root.render(jsxVariable);

//=====================react Component============================

//Functional Component

// const HeadingComponent = () => {
//   return <h1 className="heading">This is Functional Component Heading</h1>;
// };

//OR we can also write if the return value is single line statement

const HeadingComponent2 = () => (
  <h1>Title is called inside HeadingComponent!!</h1>
);
const HeadingComponent = () => (
  <div id="divContainer">
    {/* <HeadingComponent2 /> */}
    {HeadingComponent2()}
    {/* Because at the end of the day Faunctional Component is just a JS function so we can call this as a function */}
    {heading}
    {/* We can also call React element inside the component */}
    <h1 className="heading">This is Functional Component Heading</h1>
  </div>
);
root.render(<HeadingComponent />); //This is how we render component in react

const HeaderComponent = () => (
  <div id="headerStyle">
    <div id="logoImg" className="logo">
      <a href="" className="logo"></a>
    </div>
    <div id="txtSearch">
      <input type="textbox" placeholder="Search"></input>
    </div>
    <div id="userImg">
      <img src="D:\Downloads\png-clipart-user-profile-computer-icons-login-user-avatars-monochrome-black-thumbnail.png"></img>
    </div>
  </div>
);

root.render(<HeaderComponent />);
