let app = document.querySelector("#app");
let demo = document.querySelector("#demo");

app.addEventListener("focusout", () => {
    console.log("focusout");
})
app.addEventListener("blur", () => {
    console.log("blur");
})
app.addEventListener("DOMFocusOut", () => {
    console.log("DOMFocusOut");
})

demo.addEventListener("focusin", () => {
    console.log("focusin");
})
demo.addEventListener("focus", () => {
    console.log("focus");
})
demo.addEventListener("DOMFocusIn", () => {
    console.log("DOMFocusIn");
})