Function.prototype._bind = function(content) {
    content = content || {}
    const fn = this;
    return function(...args) {
        fn.call(content, ...args);
    }
}

function getName(age) {
    console.log(`${this.name} ---- ${age}`);
}

let getNyName = getName._bind({name: "hug"});
getNyName(18);