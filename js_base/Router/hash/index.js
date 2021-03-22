import Router from "./router.js";

let router = new Router();
let context = document.querySelector("#content");

window.addEventListener("hashchange", () => {
    router.load();
})

router.register("a", () => {
    context.innerHTML = "pageA";
})
router.register("b", () => {
    context.innerHTML = "pageB";
})
router.register("c", () => {
    context.innerHTML = "pageC";
})
router.register("d", () => {
    context.innerHTML = "pageD";
})
router.register("e", () => {
    throw new Error("page error");
})
router.registerIndex(() => {
    context.innerHTML = "pageA";
})
router.registerNotFound(() => {
    context.innerHTML = "404";
})
router.registerError((e) => {
    context.innerHTML = `500---${e.message}`;
})
router.load();