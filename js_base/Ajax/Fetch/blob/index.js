let imgUrl = "./static/demo.jpg";
setTimeout(() => {
    fetch(imgUrl)
    .then(res => res.blob())
    .then(blob => {
        let url = URL.createObjectURL(blob);
        insertImg(url, (src) => {
            console.log(`loaded success`);
            console.log(src);
        })
    })
},1000)

function insertImg(src, callback = () => {}) {
    if(!src) {
        throw new Error("need image");
    }
    let img = document.createElement("img");
    img.src = src;
    console.log(src);
    console.log(typeof src);
    document.body.appendChild(img);
    img.onload = () => {
        callback(src);
    }
}