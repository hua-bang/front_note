class jQuery {
    constructor(selector) {
        let slice = Array.prototype.slice;
        let dom = [...document.querySelectorAll(selector)];
        let len = dom ? dom.length : 0;
        for(let i = 0; i < len; i++) {
            this[i] = dom[i];
        }
        this.length = len;
        this.selector = selector || "";
    }

    append(node) {

    }

    addClass(name) {

    }

    html(data) 
    {}
}

window.$ = (selector) => {
    // 工厂函数
    return new jQuery(selector)
}

export default $;