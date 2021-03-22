import Router from "./router.js";
let router = new Router();
let context = document.querySelector("#content");

router.registerIndex(() => {
    context.innerHTML = "/页面"
});

router.registerNotFound(() => {
    context.innerHTML = "404 Not Found";
});

router.registerError((err) => {
    context.innerHTML = `500 --- ${err.message}`;
});

["a","b","c","d"].forEach(pathName => {
    router.register(pathName, () => {
        context.innerHTML = `${pathName} page`;
    })
})

router.register("e", () => {
    throw new Error("page error");
})

router.load();