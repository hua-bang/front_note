let mo = new MutationObserver(() => {
    console.log("test");
})

let app = document.querySelector("#app");

mo.observe(app, {
    childList: true
});

setTimeout(() => {
    console.log("setTimeout")
}, 0);

app.textContent = 123;

new Promise(resolve => {
    console.log("promise");
    resolve
}).then(res => {
    console.log(res);
})