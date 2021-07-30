import axios from "axios";
const React = require("react");

class MyButton extends React.Component {
  getStudentData = () => {
    axios.get("/api1/students").then(res => {
      console.log(res);
    })
  }
  getCarsData = () => {
    axios.get("/api2/cars").then(res => {
      console.log(res);
    })
  }
  render() {
    return (
      <div>
        <button onClick={this.getStudentData}>点我获取学生信息</button>
        <button onClick={this.getCarsData}>点我获取汽车信息</button>
      </div>
    )
  }
}

export default MyButton;