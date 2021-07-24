const React = require("react");

class Weather extends React.Component {
  state = {
    isHot: false
  }

  changeWeather = () => {
    this.setState({
      isHot: !this.state.isHot
    })
  }

  // 注意 这个声明相当于把这个函数绑定到实例对象属性上
  test = () => {
    console.log("test");
  }

  // 1 + n次 1 初始化渲染的第一次  n setState的操作次数
  render() {
    const msg = this.state.isHot ? "炎热" : "寒冷";
    return (
      <div onClick={ this.changeWeather }>今天的天气{ msg }</div>
    )
  }
}

export default Weather;