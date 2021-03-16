let dropTarget = document.querySelector("#drop");

let handleEvent = (event) => {
    event.preventDefault();
    if (event.type === "drop") {
        let files = event.dataTransfer.files;
        let url = window.URL.createObjectURL(files[0]);
        createImg(url);
    }
}

let createImg = (src, option = {}) => {
    let img = document.createElement("img");
    img.src = src;
    document.body.appendChild(img);
    img.onload = () => {
        console.log("loaded success!")
    }
}
dropTarget.addEventListener("dragenter", handleEvent);
dropTarget.addEventListener("dragover", handleEvent);
dropTarget.addEventListener("drop", handleEvent);