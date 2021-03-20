import { throttleTimestamp, throttle, throttleSetTimeout } from "./throttle.js";

const inputArr = document.querySelectorAll("input");
inputArr[0].addEventListener("input", throttleTimestamp((event) => {
    console.log(event.target.value);
},1000));

inputArr[1].addEventListener("input", throttle((event) => {
    console.log(event.target.value);
},1000));

inputArr[2].addEventListener("input", throttleSetTimeout((event) => {
    console.log(event.target.value);
},1000));