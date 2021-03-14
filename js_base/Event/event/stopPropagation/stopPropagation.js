let app = document.querySelector("#app");
let btn = document.querySelector("#btn");
btn.onclick = (event) => {
    console.log("btn clicked");
    event.stopPropagation();
}

app.onclick = () => {
    console.log("app clicked");
}