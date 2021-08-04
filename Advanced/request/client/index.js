import { request } from "./xhr.js";

let json = JSON.stringify({
  name: "John",
  surname: "Smith"
});



document.querySelector("#btn").addEventListener("click", () => {
  request("http://localhost:3000/", json, {
    "Content-Type": "application/json"
  }).then(res => {
    console.log(res);
  })
})