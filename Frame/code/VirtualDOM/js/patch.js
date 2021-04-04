import { VNode, render, setAttr } from "./VNode.js";

let allPatches; //存放整个补丁，对象来的， 键:需要打补丁的index， 值：具体的补丁
let index = 0;

function patch(node, patches) {
    allPatches = patches;
    walk(node); //从第一个节点开始
}

function walk(node) {
    let current = allPatches[index++];  // 当前节点的补丁
    
    // 遍历子节点
    let childNodes = node.childNodes;   
    childNodes.forEach(child => walk(child));

    // 有的话，打上补丁
    if(current) {
        doPatch(node, current);
    }

}

// 补丁规则
function doPatch(node, patches) {
    patches.forEach(patch => {
        switch (patch.type) {
            // 属性规则
            case 'ATTR':
                for (let key in patch.attrs) {
                    let value = patch.attrs[key];
                    if (value) {
                        setAttr(node, key, value);
                    } else {
                        node.removeAttribute(key);
                    }
                }
                break;
            // 文本补丁规则
            case "TEXT":
                node.textContent = patch.text;
                break;
            // 替换补丁的规则
            case 'REPLACE':
                let newNode = patch.newNode;
                newNode = (newNode instanceof Element) ? render(newNode) : document.createTextNode(newNode);
                node.parentNode.replaceChild(newNode, node);
                break;
            // 移除补丁的规则
            case 'REMOVE':
                node.parentNode.removeChild(node);
                break;
            default:
                break;
        }   
    })
}

export {patch};