function diff(oldTree, newTree) {

    // 大补丁，相当于存入每个VNode的小补丁
    // 声明变量patches用来存放补丁的对象
    let patches = {};

    // 第一次比较应该是树的第0个索引
    let index = 0;

    walk(oldTree, newTree, index, patches);

    return patches;
}

function walk(oldNode, newNode, index, patches) {
    // 存放补丁的数组
    let current = [];

    // 表示被移除
    if(!newNode) {
        current.push({type:"REMOVE", index});
    }else if(isString(oldNode) && isString(newNode)) {  //文本节点
        if(oldNode !== newNode) {
            // 改变测添加
            current.push({type:"TEXT", text: newNode});
        }
    }else if(oldNode.type === newNode.type) {
        let attrs = diffAttr(oldNode.props, newNode.props);
        if(Object.keys(attrs).length > 0) {
            current.push({type:"ATTR", attrs});
        }
        diffChildren(oldNode.children, newNode.children, patches);
    }else {
        current.push({type:"REPLACE", newNode})
    }

    if(current.length) {
        patches[index] = current;
    }
}

function diffAttr(oldAttrs, newAttrs) {
    let patch = {};
    for (const key in oldAttrs) {
        if(oldAttrs[key] !== newAttrs[key]) {
            patch[key] = newAttrs[key];
        }
    }

    for(const key in newAttrs) {
        if(!oldAttrs.hasOwnProperty(key)) {
            patch[key] = newAttrs[key];
        }
    }
    return patch;
}

let num = 0;

function diffChildren(oldChildren, newChildren, patches) {
    oldChildren.forEach((child, index) => {
        walk(child, newChildren[index], ++num, patches);
    })
}

function isString(target) {
    return typeof target === "string";
}

export {diff};