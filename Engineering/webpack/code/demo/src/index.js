require("./index.css");
import imgUrl from "./img/hello.png";
console.log("hello,world");

console.log(document.querySelector("#img"), imgUrl);
document.querySelector("#img").src = imgUrl;