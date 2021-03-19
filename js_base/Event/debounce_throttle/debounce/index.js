import { debounceImmediate as debounce } from "./debounce.js";

const input = document.querySelector("#input");
input.addEventListener("input", debounce(() => {
    console.log("input");
},500));
