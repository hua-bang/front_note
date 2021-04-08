function object(obj) {
    function Fn() {};
    Fn.prototype = obj;
    return new Fn();
}

function inheritPrototype(subType, superType) {
    let prototype = object(superType.prototype);
    prototype.constructor = subType;
    subType.prototype = prototype;
}