let star = {
    name: "hug",
    age: 24,
    phone: "13454645631"
};

let handler = {
    get(target, property) {
        if(property === "phone") {
            return 15315453154;
        }else if(property === "price") {
            return 1600000;
        }else if(property === "age") {
            return 18;
        }
        else {
            return "不可透露";
        }
    },
    set(target, property, value) {
        if(property === "customPrice") {
            if(value < 1600000) {
                throw new Error("the price must be higher")
            }else {
                target[property] = value;
                return true;
            }
        }else {
            return "无法修改";
        }
    }
}

let agent = new Proxy(star, handler);
console.log(agent.phone);
console.log(agent.price);
console.log(agent.age);
console.log(agent.customPrice);

agent.customPrice = 1600000