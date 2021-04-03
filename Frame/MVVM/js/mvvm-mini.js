class MVVM {
    constructor(options) {
        this.options = options;
        this._el = this.options.el;
        let root = document.querySelector(this._el);
        if(!root) {
            throw new Error("请挂载好对象");
        }

        this.init();    //初始化 ，数据劫持
        this.compile(root); //编译
    }

    init() {
        this.initData();
        this.proxyData();  
    }

    initData() {
        let vm = this;
        let data = this.options.data;
        if(typeof data === "function") {
            vm._data = data.call(vm);
        }else if(typeof data === "object") {
            vm._data = data;
        }else {
            throw new Error("data must be a function return object or object");
        }
    }

    compile(node) {
        const vm = this;
        [].forEach.call(node.childNodes, child => {
            if(!child.firstElementChild && /\{\{(.*)\}\}/.test(child.innerHTML)){
                let key = RegExp.$1.trim();
                if(!vm[key]) {
                    console.warn(`${key} is not in vm, please check your data`);
                    return false;
                }
                child.$templateHTML = child.innerHTML;
                child.innerHTML = this.replaceData(child, key);
                Observer.target = child;
                vm[key];
                Observer.target = null;
            }else if(child.firstElementChild) {
                this.compile(child);
            }
        })
    }

    replaceData(node, key) {
        return node.innerHTML = node.innerHTML.replace(new RegExp('\\{\\{\\s*'+ key +'\\s*\\}\\}', 'gm'), this._data[key]);
    }

    proxyData() {
        let vm = this;
        let data = vm._data;
        for (const key in data) {
            this.hijack(vm, "_data", key)
        }
    }

    hijack(target, sourceKey, key) {
        let obv = new Observer();
        Object.defineProperty(target, key, {
            enumerable: true,
            configurable: true,
            get: () => {
                Observer.target && obv.addSubNode(Observer.target);
                return target[sourceKey][key];
            },
            set: (val) => {
                obv.notify(key, val);
                target[sourceKey][key] = val;
                return true;
            }
        });
    }
}

class Observer {
    constructor() {
        this.subNode = [];
    }

    addSubNode(node) {
        this.subNode.push(node);
    }

    notify(key, val) {
        this.subNode.forEach((node) => {
            node.innerHTML = node.$templateHTML.replace(new RegExp('\\{\\{\\s*'+ key +'\\s*\\}\\}', 'gm'), val);
        })
    }
}

let vm = new MVVM({
    el: "#app",
    data() {
        return {
            name: "hug",
            age: 18
        }
    }
})