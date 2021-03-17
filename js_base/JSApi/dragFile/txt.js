let dropTarget = document.querySelector("#drop");

let handleEvent = (event) => {
    event.preventDefault();
    if (event.type === "drop") {
        let files = event.dataTransfer.files;
        let file = files[0];
        readFile(file).then(res => {
            let p = document.createElement("p");
            p.innerHTML = res;
            document.body.appendChild(p);
        }, error => {
            console.log(error);
        })
    }
}

let readFile = (file) => {
    return new Promise((resolve, reject) => {
        let reader = new FileReader();
        reader.readAsText(file);
        reader.onerror = () => {
            reject("error");
        }
        reader.onload = () => {
            resolve(reader.result);
        }
    })
}
dropTarget.addEventListener("dragenter", handleEvent);
dropTarget.addEventListener("dragover", handleEvent);
dropTarget.addEventListener("drop", handleEvent);