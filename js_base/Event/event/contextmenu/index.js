let body = document.body;
body.addEventListener("contextmenu", (event) => {
    event.preventDefault();
    console.log("open contextmenu");
})