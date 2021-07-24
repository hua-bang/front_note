const React = require("react");
const ReactDom = require("react-dom");

function Hello() {
  return (
    <h1>
      hello
    </h1>
  )
}

ReactDom.render(
  <Hello />,
  document.querySelector("#root")
)