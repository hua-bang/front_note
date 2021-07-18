import React from "react";

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: true
    }
  }

  handleClick(e) {
    console.log(e);
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }
  render() {
    return (
      <button onClick={ (e) => this.handleClick(e) }>
        { this.state.isToggleOn ? "on" : "off"}
      </button>
    )
  }
}

export default Toggle;