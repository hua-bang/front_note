const React = require("react");

class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.textInput1Ref = React.createRef();
  }

  getText1Val = () => {
    alert(this.textInput1Ref.current.value);
  }

  getText2Val = (event) => {
    alert(event.target.value);
  }

  render() {
    return (
      <div>
        <input type="text" placeholder="点击按钮提示数据" ref={ this.textInput1Ref } />
        <button onClick={ this.getText1Val }>点我提示左边按钮数据</button>
        <input type="text" placeholder="失去焦点" onBlur={ this.getText2Val } />
      </div>
    )
  }


};

export default Demo;