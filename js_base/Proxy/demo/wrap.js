let user = {
    name: "John"
};

function wrap(target) {
    return new Proxy(target, {
        get(target, property, receiver) {
            if(property in target) {
                return Reflect.get(target, property, receiver);
            }else {
                throw new ReferenceError(`Property doesn't exist : ${property}`);
            }
        }
    })
}

user = wrap(user);
console.log(user.name);
console.log(user.age);