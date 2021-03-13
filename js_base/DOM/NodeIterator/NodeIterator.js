/**
 * @author hug
 * @date 2021/3/13 8:45
 */
let app = document.querySelector("#app");
let nodeIterator = document.createNodeIterator(app,NodeFilter.SHOW_ELEMENT,null,false);
let node = nodeIterator.nextNode();
while (node !== null) {
    console.log(node);
    node = nodeIterator.nextNode();
}
