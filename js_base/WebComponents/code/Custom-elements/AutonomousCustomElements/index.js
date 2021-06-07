import Time from "./TimeFormatted.js";

customElements.define("time-formatted", Time);

let timeFormat = document.querySelector("time-formatted");

setInterval(() => {
    timeFormat.setAttribute("datetime", new Date());
}, 1000);