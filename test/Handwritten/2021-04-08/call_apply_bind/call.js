Function.prototype._call = function(content, ...args) {
    content = content || {};
    let fn = Symbol();
    content[fn] = this;
    let res = content[fn](...args);
    delete content[fn];
    return res;
}

function getName() {
    console.log(this.name);
}

getName._call({name: "hug"});