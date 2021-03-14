let myEvent = document.createEvent("CustomEvent");
myEvent.initCustomEvent("myEvent", true, false, "hello my event");
let app = document.querySelector("#app");
app.addEventListener("myEvent", (event) => {
    console.log(event.detail, "click");
})

app.addEventListener("click", (event) => {
    app.dispatchEvent(myEvent);
})