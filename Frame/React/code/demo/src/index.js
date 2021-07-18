import React from "react";
import ReactDOM from "react-dom";
import Clock from "./clock";
import Toggle from "./Toggle";
import NumberList from "./NumberList";
import NameForm from "./NameForm";
import Calculator from "./Calculator";
import WelcomeDialog from "./WelcomeDialog";
import SignUpDialog from "./SignUpDialog";

const name = "hug";

// class Welcome extends React.Component {
//   render() {
//     return <h1>Hello, {this.props.name}</h1>;
//   }
// }

function Welcome(props) {
  return (
    <h1> hello { props.name }</h1>
  );
}

ReactDOM.render(
  <SignUpDialog></SignUpDialog>,
  document.querySelector("#root")
)