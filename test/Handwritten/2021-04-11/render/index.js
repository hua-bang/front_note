class MVVM {
    constructor(options) {
        this.options = options;
        this.el = options.el;
        this.init();
        this.renderTree();
    }

    init() {
        this.initData();
        this.proxyData();
    }

    initData() {
        const vm = this;
        let data = vm.options.data;                   
        if(typeof data === "function") {
            vm._data = data();
        }else if(typeof data === "object") {
            vm._data = data;
            console.warn("data should be function");
        }else {
            console.error("data should be function");
        }
        
    }

    proxyData() {
        const vm = this;
        const data = vm._data;
        for(let key in data) {
            this.injack(key, "_data");
        }
    }

    injack(key, targetKey) {
        const vm = this;
        let dep = new Dep();
        Object.defineProperty(vm, key, {
            enumerable: true,
            configurable: true,
            get() {
                Dep.target && dep.addSubNodes(Dep.target);
                return vm[targetKey][key];
            },
            set(val) {
                dep.notifyAllNode(val);
                vm[targetKey][key] = val;
            }
        })
    }

    renderTree() {
        let node = document.querySelector(this.el);
        if(node === null) {
            throw new Error("确定好挂载dom的元素是否存在");
        }
        this.render(node);
    }

    render(node) {
        const vm = this;
        [].forEach.call(node.childNodes, (child => {
            if(child.nodeType === 3) {
                let reg = /\{\{(.*?)\}\}/;
                child.$template = child.textContent;
                while(reg.test(child.textContent)) {
                    let key = reg.exec(child.textContent)[1].trim();
                    let val;
                    if(vm._data[key]) {
                        Dep.target = child;
                        vm[key];
                        Dep.target = null;
                        val = vm._data[key]
                    }else {
                        console.warn(`the ${key} is not existed`);
                        val = "";
                    }
                    child.textContent = child.textContent.replace(reg.exec(child.textContent)[0], val);
                }
            }else if(child.childNodes) {
                this.render(child);
            }
        }))
    }
}

class Dep {
    static target = null;
    constructor() {
        this.subNodes = [];
    }

    addSubNodes(node) {
        this.subNodes.push(node);
    }
    
    notifyAllNode(val) {
        this.subNodes.forEach(node => {
            let reg = /\{\{(.*?)\}\}/;
            node.textContent = node.$template.replace(reg.exec(node.$template)[0], val);
        })
    }
}