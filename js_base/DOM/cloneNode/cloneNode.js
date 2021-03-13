/**
 * @author hug
 * @date 2021/3/12 20:25
 */
let app = document.querySelector("#app");
let noDeepApp = app.cloneNode();    //只复制该调用的元素节点
let deepApp = app.cloneNode(true); //只复制该调用的元素节点以及子节点
document.body.appendChild(noDeepApp);
document.body.appendChild(deepApp);
