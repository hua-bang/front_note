let array = [1,2,3];
array = new Proxy(array, {
    get(target, prop, receiver) {
        if(isNaN(prop)) {
            throw new TypeError("the key must be Number")
        }else {
            if(prop < 0) {
                if(-prop <= target.length) {
                    return target[Number(target.length) + Number(prop)];
                }
                else
                    return 0;
            }else {
                return Reflect.get(target, prop, receiver);
            }
        }
    }
})

console.log(array[-4]);