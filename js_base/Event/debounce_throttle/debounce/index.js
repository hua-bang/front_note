import { debounceImmediate as debounce } from "./debounce.js";

const inputs = document.querySelectorAll("input");

inputs[0].addEventListener("input", debounce(() => {
    console.log("input");
},500, true));

inputs[1].addEventListener("input", debounce(() => {
    console.log("input");
},500));
