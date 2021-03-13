/**
 * @author hug
 * @date 2021/3/12 16:15
 */
let app = document.querySelector("#app");

let getQueryAllChild = (node) => {
    let childNodes = node.childNodes;
    if(node.nodeType !== 1) {
        return [];
    }
    let nodeArr = [node];
    if([...childNodes].length !== 0) {
        for (const childNode of childNodes) {
            nodeArr = [...nodeArr, ...getQueryAllChild(childNode)];
        }
    }
    return nodeArr;
}

let arr = getQueryAllChild(app);
console.log(arr);
