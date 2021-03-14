let mevent = document.createEvent("HTMLEvents");
mevent.initEvent("click", true, false);
let app = document.querySelector("#app");
app.onclick = () => {
    console.log("app click");
}

app.onfocus = () => {
    console.log("focus")
}
let btn = document.querySelector("#btn");
btn.onclick = () => {
    app.dispatchEvent(mevent)
}

function simulationEvent(event, el) {
    let simEvent = document.createEvent("HTMLEvents");
    simEvent.initEvent(event, true, false);
    el.dispatchEvent(simEvent);
}

simulationEvent("click", app);