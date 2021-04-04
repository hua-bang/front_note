class MVVM {

    constructor(options) {
        this.options = options;
        this._el = this.options.el;
        
        let root = document.querySelector(this._el);

        if(!root) {
            throw new Error("请挂载好对象");
        }

        this.init();    //绑定数据 数据劫持
        this.compile(root); //编译
    }

    init() {
        this.initData();    //将opetions的data封装在vm._data中
        this.proxyData();   //数据劫持
    }

    initData() {
        const data = this.options.data;
        const vm = this;
        if(typeof data === 'function') {
            vm._data = data.call(vm);
        }else if(typeof data === "object") {
            vm._data = data;
        }else {
            throw new Error("please check type of data in option, it must be function or object");
        }
    }

    //对整个vm._data数据劫持
    proxyData() {
        const vm = this;
        const data = vm._data;
        for (const key in data) {
            this.hijack(vm, "_data", key);
        }
    }

    //劫持数据
    hijack(target, sourceKey, key) {
        let obv = new Observer();
        Object.defineProperty(target, key, {
            configurable: true,
            enumerable: true,
            get() {
                Observer.target && obv.addSubNode(Observer.target);
                // 这里记住要使用观察者模式
                return target[sourceKey][key];
            },
            set(val) {
                obv.notify(key, val);
                target[sourceKey][key] = val;
                return true;
            }
        })
    }    

    compile(node) {
        let vm = this;
        // 遍历node的节点
        [].forEach.call(node.children, child => {
            if(child && child.attributes.length > 0) {
                [].forEach.call(child.attributes, (attribute => {
                    this.vEvent(attribute.name, attribute, child);
                }))
            }
            // 匹配节点
            if(!child.firstElementChild && /\{\{(.*)\}\}/.test(child.innerHTML)) {
                // 找匹配
                let key = RegExp.$1.trim();
                if(!vm[key]) {
                    console.warn(`${key} is not in vm, please check your data`);
                    return false;
                }
                // 保留旧的模板
                child.$templateHTML = child.innerHTML;
                child.$type = "template";
                // {{ key }}替换值
                child.innerHTML = child.innerHTML.replace(new RegExp('\\{\\{\\s*'+ key +'\\s*\\}\\}', 'gm'), getString(vm._data[key]));
                Observer.target = child;
                vm[key];
                Observer.target = null;
            }else if(child.children) {
                [].forEach.call(child.children, supChild => {
                    this.compile(child);
                })
            }
        })
    }

    vEvent(event, attribute, target) {
        let key = attribute.value;
        const vm = this;
        target.$type = event;
        switch(event) {
            case "v-text": {
                Observer.target = target;
                vm[key];
                Observer.target = null;
                target.textContent = vm._data[key];
            }
            case "v-model": {
                Observer.target = target;
                vm[key];
                Observer.target = null;
                target.value = vm._data[key];
                target.addEventListener("input", (e) => {
                    let value = e.target.value;
                    vm[key] = value;
                })
            }
            case "v-html": {
                target.innerHTML = vm._data[key];
            }
        }
    }
}

// 注意，这里的观察者模式
// 一个相同的key有很多个观察者 目标对象就是key
class Observer {
    static target = null;
    constructor() {
        this.subNode = [];
    }

    addSubNode(node) {
        this.subNode.push(node);
    }

    // 通知 更新值
    notify(key, val) {
        this.subNode.forEach(node => {
            handlerNodeByType(node, key, val)       
        });
    }
}

function handlerNodeByType(node, key ,val) {
    if(node.$type === "template") {
        node.innerHTML = node.$templateHTML.replace(new RegExp('\\{\\{\\s*'+ key +'\\s*\\}\\}', 'gm'), getString(val))
    }else if(node.$type === "v-text") {
        node.innerHTML = getString(val);
    }else if(node.$type === "v-model") {
        node.value = val;
    }
}

function getString(val) {
    if(typeof val === "object") {
        return JSON.stringify(val);
    }else {
        return val;
    }
}

let vm = new MVVM({
    el: "#app",
    data() {
        return {
            name: "hug",
            age: 18,
            test: {
                a: 1,
                b: 2
            },
            htmlStr: `<div style="color:red">123456</div>`
        }
    }
})