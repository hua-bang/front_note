/**
 * @author hug
 * @date 2021/3/12 20:14
 */
let btn = document.querySelector("#btn");
btn.onclick = () => {
    let app = document.querySelector("#app");
    let demo = document.querySelector("#demo");
    app.appendChild(demo);
}
