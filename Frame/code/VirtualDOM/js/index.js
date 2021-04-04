import { createVNode, render, renderDom } from "./VNode.js";
import {diff} from "./diff.js";
import {patch} from "./patch.js";

let virtualDom1 = createVNode('ul', {class:"list"}, [
    createVNode('li', {class:"item"}, ['hug']),
    createVNode('li', {class:"item"}, [
        'hua',
        createVNode('a', {href:"https://www.baidu.com",style:"color:red"}, ['百度']),
    ]),
]);

let virtualDom2 = createVNode('ul', {class:"list"}, [
    createVNode('li', {class:"item"}, ['hug']),
    createVNode('li', {class:"item"}, [
        'hua',
        createVNode('a', {href:"https://join.qq.com",style:"color:red"}, ['腾讯']),
    ]),
]);

let dom = render(virtualDom1);
renderDom(dom, document.body);

let patches = diff(virtualDom1, virtualDom2);
console.log(patches);

patch(dom, patches);