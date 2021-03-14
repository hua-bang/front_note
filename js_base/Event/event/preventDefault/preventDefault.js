let a = document.querySelector("#a");
a.onclick = (event) => {
    console.log("a is clicked");
    event.preventDefault();
}