## Render Function

### **example**

**Initial Render**

- template (compiled into) Render Function
- (returns) Virtual DOM
- (generates) Actual DOM

in actually, the render function is make template generates to the Virtual DOM. This is important.

**Subsequent updates**

- (returns) New Virtual DOM
- (diff against Old Virtual DOM) DOM updates
- (applied to) Actual DOM

#### Virtual DOM

it a JavaScript object(like this) to describe the actual DOM. It can save resources and improve the performance.

```json
{
    "tag": "div",
    "data": {
        "attrs": {
            
        }
    },
    "children": []
}
```

we can get a tree of virtual nodes.

Render Function: A function that returns Virtual DOM!

#### Combine the reactivity and Render Function

![img](https://user-gold-cdn.xitu.io/2020/5/21/17237308c3b125a4?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

#### `JSX` vs `template` 

- template is easy to use, and simple optimization, it also show static
- JSX is more dynamic. You can achieve more complex functions.

### Render Function API

you can design your render function api, but we reference the api in Vue to learn;

可嵌套

```js
export defalut {
    render(h) {
        // tag, data, children
        return h('div', {} , [...])
    }
}
```

