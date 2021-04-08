Function.prototype._apply = function(content, args) {
    content = content || {};
    let fn = Symbol();
    content[fn] = this;
    let res = content[fn](...args);
    delete content[fn];
    return res;
}

function getName(age, year) {
    console.log(this.name);
    console.log(age, year);
}

getName._apply({name: "hug"}, [18,2021]);