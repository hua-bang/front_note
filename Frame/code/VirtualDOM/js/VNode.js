// 虚拟dom元素的类，构建实例对象，描述DOM
class VNode {
    constructor(type, props, children) {
        this.type = type;
        this.props = props;
        this.children = children;
    }
}

// 工厂模式
function createVNode(type, props, children) {
    return new VNode(type, props, children);
}

// 渲染虚拟dom成真实的dom
function render(vNode) {
    // 创建对应的node节点
    let node = document.createElement(vNode.type);

    // 遍历domObj中props的属性，进行dom属性设置
    for (const key in vNode.props) {
        setAttr(node, key, vNode.props[key]);
    }

    // 子节点的插入
    vNode.children.forEach(child => {
        // 如果是VNode 则渲染后插入， 如果不是 则说明为普通字符串，生成一个textNode 直接插入
        let childNode = child instanceof VNode ? render(child) : document.createTextNode(child);
        node.appendChild(childNode);
    })
    
    return node;
}

function setAttr(node, key ,value) {
    switch(key){
        case 'value':
            if(node.tagName.toLowerCase() === 'input' || node.tagName.toLowerCase() === 'text') {
                node.value = value;
            }else {
                node.setAttribute(key, value);
            }
            break;
        case 'style':
            node.style.cssText = value;
            break;
        default:
            node.setAttribute(key, value);
            break;
    }
}

function renderDom(el, target) {
    target.appendChild(el);
}

export {
    VNode,
    createVNode,
    render,
    renderDom,
    setAttr
}