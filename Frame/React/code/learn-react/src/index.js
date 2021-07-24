import Weather from "./components/Weather";
import Person from "./components/Person";
import Demo from "./components/Demo";
import Login from "./components/Login";
import Clock from "./components/Clock/index";
import DiffDemo from "./components/Diff/index";
const React = require("react");
const ReactDom = require("react-dom");


function Hello() {
  return (
    <h1>
      hello
    </h1>
  )
}

let p = {
  name: "hug",
  age: 19,
  sex: "男"
}

ReactDom.render(
  <div>
    <DiffDemo />
  </div>,
  document.querySelector("#root")
)